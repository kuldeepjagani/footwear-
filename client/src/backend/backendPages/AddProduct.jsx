import { useState, useEffect } from "react"
import React from 'react'
import AdminNavbar from "../backendComponent/AdminNavbar";

const AddProduct = () => {

    const [product, setProduct] = useState({
        category: '',
        name: '',
        description: '',
        image: '',
        price: '',
        quantity: ''
    });



    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:3000/api/admin/addproduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            const data = await response.json();
            console.log(data)
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };




    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/admin/getcategories');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };
    return (

        <div>
            <AdminNavbar />
            <div className="container mx-auto mt-8">
                <h1 className="text-2xl font-semibold mb-4 text-center my-4">Add Footwear Product</h1>
                <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block mb-2 ">
                                Product Category:
                                <select name="category" value={product.category} onChange={handleChange} className='my-3 w-full p-2 border rounded'>
                                    <option value="">Select category</option>
                                    {categories.map(category => (
                                        <option key={category._id} value={category._id} name=''>{category.name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2">Product Name</label>
                            <input type="text" id="name" name="name" value={product.name} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="description" className="block mb-2">Description</label>
                            <textarea id="description" name="description" value={product.description} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
                        </div>
                        <div>
                            <label htmlFor="image" className="block mb-2" onChange={handleImageChange}>Product Image</label>
                            {/* <input type="text" id="image" name="image" value={product.image} onChange={handleChange} className="w-full p-2 border rounded" /> */}
                            <input name="image" type="file" accept="image/*" className="mt-2" />
                        </div>
                        <div>
                            <label htmlFor="price" className="block mb-2">Price</label>
                            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label htmlFor="quantity" className="block mb-2">Product Quantity (max 5):</label>
                            <input type="number" name="quantity" value={product.quantity} onChange={handleChange} max={5} />
                        </div>
                    </div>
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
