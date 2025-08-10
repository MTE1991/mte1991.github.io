import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xidodomvfmsjvlzcnsof.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpZG9kb212Zm1zanZsemNuc29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MDU3NDQsImV4cCI6MjA3MDM4MTc0NH0.N7iKIWaSqjoad-eXONFI8UiWyp8bCsvXXXAdaa5qSA8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
