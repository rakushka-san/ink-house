import type { IFilter } from '@/models/Filters'
import type { IReproduction } from '@/models/Reproduction'

const URL = `${import.meta.env.VITE_API_URL}reproductions`

export const getReproductions = async (filters: IFilter): Promise<IReproduction[]> => {
  let params = []

  let key: keyof IFilter
  for (key in filters) {
    if (filters[key]) {
      const param = `${key}=${encodeURIComponent(filters[key])}`
      params.push(param)
    }
  }

  const response = await fetch(URL + (params ? `?${params.join('&')}` : ''))
  const reproductions = await response.json()

  return reproductions
}
