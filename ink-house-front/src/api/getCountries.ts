const URL = `${import.meta.env.VITE_API_URL}reproductions/countries`

export const getCountries = async (): Promise<string[]> => {
  const response = await fetch(URL)
  const countries = await response.json()

  return countries
}
