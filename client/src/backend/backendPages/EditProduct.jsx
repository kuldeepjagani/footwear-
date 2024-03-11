
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../backendComponent/AdminNavbar'
import { Link, useParams } from 'react-router-dom'

const EditProduct = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([{}]);
    const [error, setError] = useState(null);
    const [editProduct, setEditProduct] = useState(null)

    const fetchData = async () => {

        try {
            const response = await fetch('http://127.0.0.1:3000/api/product/getallproduct');
            if (!response.ok) {
                throw new Error('Failed to fetch product data');
            }
            const data = await response.json();

            setProduct(data);
            onEditData();

            // onEiditData(data);
        } catch (error) {
            setError(error.message);
        }
    };



    useEffect(() => {
        fetchData();
    }, []);



    // product.map(singleProduct => {
    //     // while (singleProduct._id === id) {
    //     //     setEditProduct(product)
    //     // }

    // })

    function onEditData(data) {
        console.log(product)

        product.map((product) => {
            if (product._id == id) {
                return setEditProduct(data)
            }
        })
    }



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
                <h1 className="text-2xl font-bold mb-4">Edit Product </h1>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Description</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {products.map(product => ( */}
                        <tr >
                            <td className="border border-gray-300 px-4 py-2">name</td>
                            <td className="border border-gray-300 px-4 py-2">desc</td>
                            <td className="border border-gray-300 px-4 py-2">price</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img src="" alt="" className="h-12 w-12 object-cover" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <Link > <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >Edit</button></Link>
                            </td>
                        </tr>
                        {/* ))} */}
                    </tbody>
                </table>
            </div>


        </div>

    )
}

export default EditProduct
