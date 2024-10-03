import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

//Sign up function
export function signUp(email, password) {
   return supabase.auth.signUp({
      email,
      password,
   });
}
