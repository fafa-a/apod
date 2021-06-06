import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://pkonpcjzjjefublfunli.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const [month, date, year] = new Date().toLocaleDateString("fr-FR").split("/")
const today = `${year + "/" + date + "/" + month}`

const picsOftheDay = async () => {
  let { data: apod, error } = await supabase
    .from("apod")
    .select("*")
    .eq("date", today)
  return { apod, error }
}

export { picsOftheDay }
