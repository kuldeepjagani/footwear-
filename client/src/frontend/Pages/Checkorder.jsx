import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Checkorder = () => {
    const orders = [
        {
            orderId: 1,
            productName: 'Shoes',
            productPrice: '$50',
            quantity: 2,
            orderDate: '2024-01-25',
            status: 'Processing'
        },
        {
            orderId: 2,
            productName: 'Socks',
            productPrice: '$10',
            quantity: 3,
            orderDate: '2024-01-24',
            status: 'Shipped'
        },
        // Add more orders as needed
    ];
    return (
        <div>
            <Navbar />
            <h1>order</h1>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Order ID</th>
                            <th className="px-4 py-2">Product Name</th>
                            <th className="px-4 py-2">Product Price</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Order Date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.orderId} className="border-b border-gray-200">
                                <td className="px-4 py-2">{order.orderId}</td>
                                <td className="px-4 py-2">{order.productName}</td>
                                <td className="px-4 py-2">{order.productPrice}</td>
                                <td className="px-4 py-2">{order.quantity}</td>
                                <td className="px-4 py-2">{order.orderDate}</td>
                                <td className="px-4 py-2">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer />
        </div>
    )
}

export default Checkorder
