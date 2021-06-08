const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const formatDate = (date) => {
  const year = date.substring(0, 4)
  const monthNumber = date.substring(5, 7)
  const day = date.substring(8, 10)
  const index = +monthNumber - 1
  const monthLetter = month[index]
  return `${monthLetter + " " + day + ", " + year}`
}
export { formatDate }
