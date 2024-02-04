import React, { useState } from 'react';

const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [editingCategoryId, setEditingCategoryId] = useState(null);
    const [nextCategoryId, setNextCategoryId] = useState(1);

    const handleAddCategory = () => {
        const newCategory = {
            id: nextCategoryId,
            name: newCategoryName
        };
        setCategories([...categories, newCategory]);
        setNewCategoryName('');
        setNextCategoryId(prevId => prevId + 1);
    };

    const handleEdit = (categoryId) => {
        setEditingCategoryId(categoryId);
    };

    const handleSave = (categoryId, newName) => {
        setCategories(categories.map(category => (
            category.id === categoryId ? { ...category, name: newName } : category
        )));
        setEditingCategoryId(null);
    };

    const handleDelete = (categoryId) => {
        setCategories(categories.filter(category => category.id !== categoryId));
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <div className="mb-4 flex items-center">
                <input
                    type="text"
                    className="shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="New category name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddCategory}
                >
                    Add Category
                </button>
            </div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingCategoryId === category.id ? (
                                    <input
                                        type="text"
                                        value={category.name}
                                        onChange={(e) => handleSave(category.id, e.target.value)}
                                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                ) : (
                                    category.name
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {editingCategoryId === category.id ? (
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                                        onClick={() => handleSave(category.id, category.name)}
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                                            onClick={() => handleEdit(category.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            onClick={() => handleDelete(category.id)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// export default CategoryManagement;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        category: '',
        description: '',
        image: '',
        price: '',
        quantity: ''
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Fetch categories from the backend when component mounts
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://yourbackendurl.com/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories: ', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://yourbackendurl.com/addProduct', product);
            console.log(response.data);
            // Add any additional handling here, such as showing a success message or redirecting
        } catch (error) {
            console.error('Error adding product: ', error);
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Product Name:
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </label>
                <label>
                    Product Category:
                    <select name="category" value={product.category} onChange={handleChange}>
                        <option value="">Select category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Product Description:
                    <textarea name="description" value={product.description} onChange={handleChange} />
                </label>
                <label>
                    Product Image URL:
                    <input type="text" name="image" value={product.image} onChange={handleChange} />
                </label>
                <label>
                    Product Price:
                    <input type="text" name="price" value={product.price} onChange={handleChange} />
                </label>
                <label>
                    Product Quantity (max 5):
                    <input type="number" name="quantity" value={product.quantity} onChange={handleChange} max={5} />
                </label>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
