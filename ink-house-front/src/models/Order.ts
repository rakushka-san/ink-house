import type { IOrderElement } from '@/models/OrderElement'

export interface IOrder {
  customerName: string
  customerSurname: string
  phoneNumber: string
  shippingAddress: string
  orderList: IOrderElement[]
}
