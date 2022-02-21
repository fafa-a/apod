import axios from "redaxios"

const fetchNasa = async () => {
    const res = axios.get(import.meta.env.VITE_NASA_BASE_URL)
    const {
        data: {
            copyright,
            date,
            explanation,
            hdurl,
            media_type,
            service_version,
            title,
            url,
        },
    } = await res

    return {
        copyright,
        date,
        explanation,
        hdurl,
        media_type,
        url,
        service_version,
        title,
    }
}

const searchNasa = async (startDate, endDate) => {
    const res = axios.get(
        import.meta.env.VITE_NASA_BASE_URL +
            "&start_date=" +
            startDate +
            "&end_date=" +
            endDate
    )
    const { data } = await res
    return { data }
}

export { fetchNasa, searchNasa }
