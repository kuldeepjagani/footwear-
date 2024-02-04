import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-lg">Your Logo</div>
                        <div className="space-x-4">
                            <Link to="/addcategory" className="text-white">Add Category</Link>
                            <Link to="/addproduct" className="text-white">Add Product</Link>
                            <Link to="/updateproduct" className="text-white">Update Product</Link>
                            <Link to="/updatestatus" className="text-white">Update Status</Link>
                            <Link to="/userfeedback" className="text-white">User FeedBack</Link>
                            <Link to="/registerdetails" className="text-white">Register Details</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNavbar
