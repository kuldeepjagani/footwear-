import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/user/cartSlice';

import { message } from "antd";
import { useNavigate } from 'react-router-dom';
// import "../../assets/Style/product.css"



const Product = () => {


    const navigate = useNavigate()
    // const { carts } = useSelector((item) => item.cart)


    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const dispatch = useDispatch()


    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/product/getallproduct');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();

            setProduct(data);
        } catch (error) {
            setError(error.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }


    // add cart

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        // navigate('/productcart')
        message.success("Successfully add on cart")
    }


    return (
        <div>

            <div className="product-container mx-auto p-4">
                <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Footwear Products</h3>
                    {product.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 product-box">
                            {product.map((product, index) => (
                                <div key={index} className="border p-4 product-img">
                                    <div className="md:w-1/2 image-cart">
                                        <img src={`http://127.0.0.1:3000/images/` + product.image} alt="" className="  mb-4 " />
                                    </div>
                                    <div className="flex justify-between products-center mb-2">
                                        <span> <b>Gender</b> : {product.category}</span>
                                        <span> <b>Price</b> : {product.price}</span>
                                    </div>
                                    <button
                                        className="w-full bg-green-500 text-white px-2 py-1 rounded"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                            {/* Add more footwear products as needed */}
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Product
