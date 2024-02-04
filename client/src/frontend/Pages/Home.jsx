import React from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
// import { image } from '../../assets/images'
import { TERipple } from 'tw-elements-react';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

                {/* {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="border p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span>{item.name}</span>
                                    <span>${item.price}</span>
                                </div>
                                <button
                                    className="w-full bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => removeFromCart(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )} */}

                {/* Example footwear items */}
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Footwear Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sneakers</span>
                                <span>$50</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sneakers', price: 50 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sandals</span>
                                <span>$30</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sandals', price: 30 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sandals</span>
                                <span>$30</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sandals', price: 30 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sandals</span>
                                <span>$30</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sandals', price: 30 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sandals</span>
                                <span>$30</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sandals', price: 30 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        <div className="border p-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>Sandals</span>
                                <span>$30</span>
                            </div>
                            <button
                                className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                onClick={() => addToCart({ name: 'Sandals', price: 30 })}
                            >
                                Add to Cart
                            </button>
                        </div>
                        {/* Add more footwear items as needed */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
