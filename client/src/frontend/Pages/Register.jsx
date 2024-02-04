import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    signInStart,
    signInSuccess,
    signInFailure,
} from '../../redux/user/userSlice';

const Register = () => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    // const navigate = useNavigate()
    // const { loading, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handelFormData = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {

            const response = await fetch("http://127.0.0.1:3000/api/user/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className='p-3 max-w-lg mx-auto'>
                <h1 className='text-3xl text-center font-semibold my-7'>Register</h1>
                <form onSubmit={handelFormData} className='flex flex-col gap-4'>

                    <input className='border p-3 rounded-lg' type="text" placeholder='username' name="username" value={formData.username} onChange={handleChange} />
                    <input className='border p-3 rounded-lg' type="email" placeholder='email' name="email" value={formData.email} onChange={handleChange} />
                    <input className='border p-3 rounded-lg' type="password" placeholder='password' name="password" value={formData.password} onChange={handleChange} />

                    {/* <input
                        type='password'
                        placeholder='confirm password'
                        className='border p-3 rounded-lg'
                        id='c_password'
                        onChange={handleChange}
                    /> */}


                    <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> Sigunp
                    </button>

                </form>


            </div>
        </>
    )
}

export default Register
