/*
  # Add Micro and Mini Challenge Types

  1. New Challenge Types
    - `Micro` ($5,000 account)
      - $49 entry fee
      - 70% profit share
      - 10% profit target
      - 4% maximum drawdown
    - `Mini` ($10,000 account)
      - $99 entry fee
      - 75% profit share
      - 10% profit target
      - 5% maximum drawdown
  
  2. Changes
    - Adds two new challenge types to the existing options
    - Maintains the same duration (30 days) as other challenges
*/

-- Insert Micro challenge type if it doesn't exist
INSERT INTO challenge_types 
  (name, account_size, entry_fee, profit_target, max_drawdown, duration_days, profit_share)
SELECT 
  'Micro', 5000, 49, 10, 4, 30, 70
WHERE 
  NOT EXISTS (
    SELECT 1 FROM challenge_types WHERE account_size = 5000
  );

-- Insert Mini challenge type if it doesn't exist
INSERT INTO challenge_types 
  (name, account_size, entry_fee, profit_target, max_drawdown, duration_days, profit_share)
SELECT 
  'Mini', 10000, 99, 10, 5, 30, 75
WHERE 
  NOT EXISTS (
    SELECT 1 FROM challenge_types WHERE account_size = 10000
  );