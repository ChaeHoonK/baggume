import { createClient } from "@supabase/supabase-js";

let supabaseUrl = process.env.SUPABASE_URL as string;
let supabaseKey = process.env.SUPABASE_KEY as string;

if (!supabaseUrl) {
  supabaseUrl = 'https://hipdxepabezvbybqypzc.supabase.co'
}

if (!supabaseKey) {
    supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpcGR4ZXBhYmV6dmJ5YnF5cHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzMjE1MjUsImV4cCI6MjAxOTg5NzUyNX0.TmpQfyYqY9NbrybMLC1s7Ibla-hfXxDt9cPFOOuorGk";
}

export default createClient(supabaseUrl, supabaseKey);

