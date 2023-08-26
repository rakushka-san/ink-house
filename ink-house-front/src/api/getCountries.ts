const URL = `${import.meta.env.VITE_API_URL}:${
  import.meta.env.VITE_API_PORT
}/reproductions/countries`

export const getCountries = async (): Promise<string[]> => {
  const response = await fetch(URL)
  const countries = await response.json()

  return countries
}
