import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// import "../../assets/Style/navbar.css"


const Navbar = ({ size }) => {

    const [product, setProduct] = useState(null);

    const name = localStorage.getItem('username')


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/product/getallproduct');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();
            console.log(data)
            setProduct(data);
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <>
            <nav className="bg-gray-800 p-4 navbar">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-lg">Footware</div>
                        <div className="space-x-4">
                            <Link to="/home" className="text-white">Home</Link>
                            <Link to="/about" className="text-white">About</Link>
                            <Link to="/feedback" className="text-white">FeedBack</Link>
                            <Link to="/chekorder" className="text-white">Check Order</Link>

                        </div>

                        <div className="space-x-4 space-y-4">
                            <div className=' text-white font-bold'>{name}</div>
                            <div className='flex justify-between w-8'>

                                <Link to={"/productcart"}>
                                    <FaShoppingCart className="text-white font-bold text-lg" />
                                </Link>

                                <span>{size}</span>

                                {/* {product.length === 0 ? (
                                    <span className='text-white font-100 pt-1'>
                                        2
                                    </span>
                                ) : (

                                    <span className='text-white font-100 pt-1'>
                                        3
                                    </span>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

