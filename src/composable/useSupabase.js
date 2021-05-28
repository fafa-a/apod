import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://pkonpcjzjjefublfunli.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const picsOftheDay = async () => {
  let { data: apod, error } = await supabase
    .from("apod")
    .select("*")
    .eq("date", "2021/05/28")
  return { apod, error }
}
export { picsOftheDay }
