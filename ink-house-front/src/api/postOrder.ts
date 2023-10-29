import type { IOrder } from '@/models/Order'

const URL = `${import.meta.env.VITE_API_URL}:${import.meta.env.VITE_API_PORT}/orders`

export const postOrder = async (order: IOrder): Promise<IOrder> => {
  const response = await fetch(URL, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(order)
  })
  const res = await response.json()

  return res
}
