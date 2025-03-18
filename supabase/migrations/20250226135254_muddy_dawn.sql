/*
  # Fix function search path security issue

  1. Changes
    - Modify handle_new_user function to include explicit search path
    - Add SECURITY DEFINER to ensure proper privilege escalation
    - Set search_path to prevent search path injection attacks

  2. Security
    - Explicitly set search_path to public, pg_temp
    - Maintain SECURITY DEFINER for proper privilege handling
*/

CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (new.id, new.raw_user_meta_data->>'name');
  RETURN new;
END;
$$;