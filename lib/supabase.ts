import { createClient } from '@supabase/supabase-js';

// TODO: Replace with your Supabase project URL and anon key.
// You can find these in your Supabase project dashboard under Settings > API.
const supabaseUrl = 'https://woukgcowxruxggqtmjzg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvdWtnY293eHJ1eGdncXRtanpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NjYzNTIsImV4cCI6MjA3NDQ0MjM1Mn0.cNuZdjiVzXH2K4A-Hj7UsdkwYLF1qwetLbYXUy26uyA';

if (supabaseUrl === 'https://woukgcowxruxggqtmjzg.supabase.co' || supabaseAnonKey === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvdWtnY293eHJ1eGdncXRtanpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4NjYzNTIsImV4cCI6MjA3NDQ0MjM1Mn0.cNuZdjiVzXH2K4A-Hj7UsdkwYLF1qwetLbYXUy26uyA') {
    //console.warn(`Supabase credentials are not set. Please update lib/supabase.ts. This will prevent form submissions from working.`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
