import { createClient } from '@supabase/supabase-js'

// ✅ Your real Supabase project URL
const supabaseUrl = 'https://fdvqvbbjjiaatbpisbpp.supabase.co'

// ✅ Your anon public API key (from Supabase → Settings → API)
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkdnF2YmJqamlhYXRicGlzYnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNTc2MzIsImV4cCI6MjA3NjczMzYzMn0.vttHmQJU55GxdYq3ufR2ez7ncGNVq4e85frm9lwxJ6A'

export const supabase = createClient(supabaseUrl, supabaseKey)
