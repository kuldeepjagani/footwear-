import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4">
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
                            <div className=' text-white font-bold'>UserName</div>
                            <FaShoppingCart className="text-white font-bold text-lg" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

