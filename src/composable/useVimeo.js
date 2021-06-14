import axios from "redaxios"

const fetchVimeo = async (url) => {
  const URL = url.replace("player.", "")
  const res = axios.get(import.meta.env.VITE_VIMEO + URL)
  const {
    data: { thumbnail_url },
  } = await res
  return { thumbnail_url }
}

export { fetchVimeo }
