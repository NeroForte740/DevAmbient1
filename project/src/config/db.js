const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv").config();

const url = "https://zbthtpozyiduplpzylos.supabase.co";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpidGh0cG96eWlkdXBscHp5bG9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTQ5NTE1NSwiZXhwIjoyMDU1MDcxMTU1fQ.L8hiIx1hogoMAVTjDBgxtOby-4lyrTftSK4egG_GWzA";

const supabase = createClient(url, apikey);

module.exports = { supabase };
