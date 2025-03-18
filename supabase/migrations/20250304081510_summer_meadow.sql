/*
  # Add Micro and Mini challenge types

  1. New Data
    - Adds two new challenge types: Micro ($5,000) and Mini ($10,000)
    - Each with appropriate profit targets, drawdowns, and profit shares
  
  2. Implementation
    - Uses DO block to safely insert records only if they don't exist
    - Checks for existence based on account_size which should be unique
*/

DO $$
BEGIN
  -- Insert Micro challenge type if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM challenge_types WHERE account_size = 5000) THEN
    INSERT INTO challenge_types 
      (name, account_size, entry_fee, profit_target, max_drawdown, duration_days, profit_share)
    VALUES
      ('Micro', 5000, 49, 10, 4, 30, 70);
  END IF;
  
  -- Insert Mini challenge type if it doesn't exist
  IF NOT EXISTS (SELECT 1 FROM challenge_types WHERE account_size = 10000) THEN
    INSERT INTO challenge_types 
      (name, account_size, entry_fee, profit_target, max_drawdown, duration_days, profit_share)
    VALUES
      ('Mini', 10000, 99, 10, 5, 30, 75);
  END IF;
END $$;