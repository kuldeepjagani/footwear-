import React, { useState } from 'react';


const CategoryPage = () => {



    return (
        <>

            <div className="container mx-auto my-40">
                <h1 className="text-2xl font-bold mb-4">Categories</h1>
                <table className="table-auto min-w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">ID</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Operation</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className="border-b border-gray-200">
                            <td className="px-4 py-2 text-center">1</td>
                            <td className="px-4 py-2 text-center">Ram</td>
                            <td className="px-4 py-2">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 float-right mx-2" onClick={() => handleEdit(category.id)}>Edit</button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded  float-right" onClick={() => handleDelete(category.id)}>Delete</button>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    );
};

export default CategoryPage;
