import data from '@/../product/sections/student-panel/data.json'
import { OrderHistory } from './components/OrderHistory'
import type { Order } from '@/../product/sections/student-panel/types'

export default function OrderHistoryPreview() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <OrderHistory
        orders={data.orders as Order[]}
        onViewOrder={(orderId) => console.log('View order:', orderId)}
      />
    </div>
  )
}
