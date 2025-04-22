const { createClient } = require("@supabase/supabase-js");
const dotenv = require("dotenv").config();

const url = "URL";
const apikey =
  "APIKEY";

const supabase = createClient(url, apikey);

module.exports = { supabase };
