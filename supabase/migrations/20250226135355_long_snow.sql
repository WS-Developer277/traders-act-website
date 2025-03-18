/*
  # Add trading challenge management functionality

  1. New Tables
    - `challenge_types`
      - Predefined challenge configurations
      - Stores different account sizes and their requirements
    
    - `challenge_payments`
      - Tracks challenge entry payments
      - Links payments to challenges

  2. Changes
    - Add new columns to trading_challenges
      - challenge_type_id reference
      - payment_id reference
    
  3. Security
    - Enable RLS on new tables
    - Add policies for secure access
*/

-- Create challenge types table
CREATE TABLE IF NOT EXISTS challenge_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  account_size numeric NOT NULL,
  entry_fee numeric NOT NULL,
  profit_target numeric NOT NULL,
  max_drawdown numeric NOT NULL,
  duration_days integer NOT NULL,
  profit_share numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create challenge payments table
CREATE TABLE IF NOT EXISTS challenge_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  amount numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  payment_method text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_payment_status CHECK (status IN ('pending', 'completed', 'failed', 'refunded'))
);

-- Add new columns to trading_challenges
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'trading_challenges' AND column_name = 'challenge_type_id'
  ) THEN
    ALTER TABLE trading_challenges 
    ADD COLUMN challenge_type_id uuid REFERENCES challenge_types,
    ADD COLUMN payment_id uuid REFERENCES challenge_payments;
  END IF;
END $$;

-- Enable RLS
ALTER TABLE challenge_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenge_payments ENABLE ROW LEVEL SECURITY;

-- Policies for challenge_types
CREATE POLICY "Anyone can view challenge types"
  ON challenge_types
  FOR SELECT
  TO authenticated
  USING (true);

-- Policies for challenge_payments
CREATE POLICY "Users can view own payments"
  ON challenge_payments
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create payments"
  ON challenge_payments
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Insert default challenge types
INSERT INTO challenge_types 
  (name, account_size, entry_fee, profit_target, max_drawdown, duration_days, profit_share)
VALUES
  ('Starter', 25000, 199, 10, 5, 30, 80),
  ('Pro', 50000, 299, 10, 6, 30, 85),
  ('Elite', 100000, 499, 10, 7, 30, 90)
ON CONFLICT DO NOTHING;