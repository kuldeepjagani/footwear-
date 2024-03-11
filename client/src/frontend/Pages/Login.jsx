import React, { useState } from 'react'
import { message } from "antd";
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({

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

            const res = await fetch("http://127.0.0.1:3000/api/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            // window.location.reload();
            // if (res.data.success) {
            var body = await res.json();
            const username = body.user.username
            // console.log(body)
            localStorage.setItem('token', body.token);
            localStorage.setItem('email', body.user.email);
            localStorage.setItem('id', body.user._id);
            localStorage.setItem('username', username);
            message.success('Login Succeesful');
            navigate('/home')


            // }

        } catch (error) {
            message.error("Login not successfully");
        }
    }

    return (
        <div>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
                <form onSubmit={handelFormData} className='flex flex-col gap-4'>

                    <input className='border p-3 rounded-lg' type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} required />
                    <input className='border p-3 rounded-lg' type="password" placeholder='password' name="password" value={formData.password} onChange={handleChange} required />

                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> SiguIn
                    </button>

                </form>


            </div>
        </div>
    )
}

export default Login
