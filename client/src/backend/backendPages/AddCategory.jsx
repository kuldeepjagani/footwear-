import React, { useState, useEffect } from 'react'
import AdminNavbar from '../backendComponent/AdminNavbar'

import Footer from '../../frontend/Component/Footer';

const AddCategory = () => {
    const [categories, setCategories] = useState([]);
    const [newCategoryName, setNewCategoryName] = useState('');


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

    const handleAddCategory = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/admin/addcategories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newCategoryName }),
            });
            const data = await response.json();
            setCategories([...categories, data]);
            setNewCategoryName('');
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const handleEditCategory = async (categoryId, newName) => {
        console.log(categoryId)
        console.log("name")
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/admin/editcategories/${categoryId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newName }),
            });
            if (response.ok) {
                const updatedCategories = categories.map(category =>
                    category._id === categoryId ? { ...category, name: newName } : category
                );
                setCategories(updatedCategories);
            }
        } catch (error) {
            console.error('Error editing category:', error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        console.log("Delete")
        try {
            const response = await fetch(`http://127.0.0.1:3000/api/admin/deletecategories/${categoryId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const filteredCategories = categories.filter(category => category._id !== categoryId);
                setCategories(filteredCategories);
            }
        } catch (error) {
            console.log('Error deleting category:', error);
        }
    };

    return (
        <>
            <AdminNavbar />
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
                        {categories.map((category, index) => (
                            <tr key={category._id}>
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
                                        onClick={() => handleEditCategory(category._id, prompt('Enter new name', category.name))}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => handleDeleteCategory(category._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default AddCategory
