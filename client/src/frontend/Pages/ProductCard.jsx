import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useSelector } from 'react-redux'
import { message } from "antd";

const ProductCard = () => {

    const { carts } = useSelector((item) => item.cart)
    const [cart, setCart] = useState([])


    return (
        <>
            <Navbar size={cart.length} />

            <div>
                <div className="container mx-auto p-4">
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Footwear Products</h3>
                        {/* {carts.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : ( */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {carts?.map((item, index) => (
                                <div key={index} className="border p-4">
                                    <div className="md:w-1/2">
                                        <img src={`http://127.0.0.1:3000/images/` + item.image} alt={item.name} className="w-full h-auto mb-4" />
                                    </div>
                                    <div className="flex justify-between products-center mb-2">
                                        <span> <b>Gender</b> : {item.category}</span>
                                        <span> <b>Price</b> {item.price}</span>
                                    </div>
                                    <button
                                        className="w-full bg-green-500 text-white px-2 py-1 rounded">Buy
                                    </button>
                                </div>
                            ))}
                            {/* Add more footwear products as needed */}
                        </div>
                        {/* )} */}
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default ProductCard
