const URL = `${import.meta.env.VITE_API_URL}reproductions/years`

export const getYears = async (): Promise<number[]> => {
  const response = await fetch(URL)
  const years = await response.json()

  return years
}
