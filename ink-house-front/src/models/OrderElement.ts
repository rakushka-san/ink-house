import type { IReproduction } from '@/models/Reproduction'

export interface IOrderElement {
  reproduction: IReproduction
  size: string
  method: string
  count: number
}
