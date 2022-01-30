import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://pkonpcjzjjefublfunli.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const [date, month, year] = new Date().toLocaleDateString("fr-FR").split("/")
const today = `${year}-${month}-${date}`
console.log({ today })
const picsOftheDay = async () => {
  let { data: apod, error } = await supabase
    .from("apod")
    .select("*")
    .eq("date", today)
  return { apod, error }
}
const picsOfLast31Days = async (arg) => {
  let { data: apod, error } = await supabase
    .from("apod")
    .select("*")
    .gt("date", arg)
    .order("date", { ascending: false })

  return { apod, error }
}
export { picsOftheDay, picsOfLast31Days }
