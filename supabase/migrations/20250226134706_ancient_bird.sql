/*
  # Initial Schema Setup for TraderMate

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key, references auth.users)
      - `name` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `trading_challenges`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `account_size` (numeric)
      - `status` (text)
      - `start_date` (timestamp)
      - `end_date` (timestamp)
      - `profit_target` (numeric)
      - `max_drawdown` (numeric)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `trading_stats`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `challenge_id` (uuid, references trading_challenges)
      - `date` (date)
      - `balance` (numeric)
      - `daily_pnl` (numeric)
      - `win_rate` (numeric)
      - `total_trades` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to:
      - Read their own profile
      - Update their own profile
      - Read their own trading challenges
      - Read their own trading stats
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create trading_challenges table
CREATE TABLE trading_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  account_size numeric NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  start_date timestamptz,
  end_date timestamptz,
  profit_target numeric NOT NULL,
  max_drawdown numeric NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'active', 'completed', 'failed'))
);

-- Create trading_stats table
CREATE TABLE trading_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles ON DELETE CASCADE NOT NULL,
  challenge_id uuid REFERENCES trading_challenges ON DELETE CASCADE NOT NULL,
  date date NOT NULL,
  balance numeric NOT NULL,
  daily_pnl numeric NOT NULL DEFAULT 0,
  win_rate numeric NOT NULL DEFAULT 0,
  total_trades integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE trading_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Create policies for trading_challenges
CREATE POLICY "Users can view own trading challenges"
  ON trading_challenges
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create trading challenges"
  ON trading_challenges
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create policies for trading_stats
CREATE POLICY "Users can view own trading stats"
  ON trading_stats
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create trading stats"
  ON trading_stats
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Create function to handle profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (new.id, new.raw_user_meta_data->>'name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user profile creation
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();