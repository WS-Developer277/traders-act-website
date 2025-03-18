/*
  # Add Micro and Mini challenge types
  
  1. New Data
    - Adds 'Micro' and 'Mini' challenge types if they don't already exist
    - Uses account_size as the check condition since it should be unique
  
  This migration inserts two new challenge types with smaller account sizes
  for entry-level traders.
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