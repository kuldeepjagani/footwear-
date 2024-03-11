import React, { useState, useEffect } from 'react'
import AdminNavbar from '../backendComponent/AdminNavbar'
import { Link } from 'react-router-dom'

const UpdateProduct = () => {


    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

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

    return (
        <div>
            <AdminNavbar />


            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Product Table</h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img src={`http://127.0.0.1:3000/images/` + product.image} alt="" className="h-12 w-12 object-cover" />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <Link to={`/editproduct/${product._id}`}> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >Edit</button></Link>
                                    <Link> <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>

    )
}

export default UpdateProduct
