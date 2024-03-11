import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';

import { message } from "antd";

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate()


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handelFormData = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch("http://127.0.0.1:3000/api/user/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            navigate('/login')
            message.success("Register Successfully");
        } catch (error) {
            console.error('Error:', error);
            message.error("Something Wrong");
        }
    }

    return (
        <>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
                <form onSubmit={handelFormData} className='flex flex-col gap-4'>

                    <input className='border p-3 rounded-lg' type="text" placeholder='username' name="username" value={formData.username} onChange={handleChange} required />
                    <input className='border p-3 rounded-lg' type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} required />
                    <input className='border p-3 rounded-lg' type="password" placeholder='password' name="password" value={formData.password} onChange={handleChange} required />

                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> Sigunp
                    </button>

                    <div>
                        <span>Already Register Click on <span className="bg-slate-700 text-white  p-1 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"> <Link to="/login" >Login</Link></span> </span>
                    </div>

                </form>


            </div>
        </>
    )
}

export default Register
