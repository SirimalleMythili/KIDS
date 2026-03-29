import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vprzyvelevlloyingfut.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwcnp5dmVsZXZsbG95aW5nZnV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNzMzMDUsImV4cCI6MjA3Njg0OTMwNX0.P-8qreVrtnwxdcR1V2aXsW0nOEu0X5E5XMhU2B0UoDE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
