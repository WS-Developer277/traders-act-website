import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please click the "Connect to Supabase" button in the top right corner to set up your Supabase project.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Define the challenge types interface
export interface ChallengeType {
  id: string;
  name: string;
  account_size: number;
  entry_fee: number;
  profit_target: number;
  max_drawdown: number;
  duration_days: number;
  profit_share: number;
}

// Function to fetch all challenge types
export async function fetchChallengeTypes(): Promise<ChallengeType[]> {
  const { data, error } = await supabase
    .from('challenge_types')
    .select('*')
    .order('account_size', { ascending: true });
  
  if (error) {
    console.error('Error fetching challenge types:', error);
    return [];
  }
  
  // Add the new challenge types if they don't exist in the database
  const existingTypes = data || [];
  const microExists = existingTypes.some(type => type.account_size === 5000);
  const miniExists = existingTypes.some(type => type.account_size === 10000);
  
  if (!microExists || !miniExists) {
    const newTypes = [];
    
    if (!microExists) {
      newTypes.push({
        name: 'Micro',
        account_size: 5000,
        entry_fee: 49,
        profit_target: 10,
        max_drawdown: 4,
        duration_days: 30,
        profit_share: 70
      });
    }
    
    if (!miniExists) {
      newTypes.push({
        name: 'Mini',
        account_size: 10000,
        entry_fee: 99,
        profit_target: 10,
        max_drawdown: 5,
        duration_days: 30,
        profit_share: 75
      });
    }
    
    if (newTypes.length > 0) {
      const { error: insertError } = await supabase
        .from('challenge_types')
        .insert(newTypes);
      
      if (insertError) {
        console.error('Error inserting new challenge types:', insertError);
      } else {
        // Fetch the updated list
        const { data: updatedData } = await supabase
          .from('challenge_types')
          .select('*')
          .order('account_size', { ascending: true });
        
        return updatedData || [];
      }
    }
  }
  
  return existingTypes;
}