
import { useState } from 'react';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Product from './Product';
import { message } from "antd";
// import { image } from '../../assets/images'

const Home = () => {

    const [cart, setCart] = useState([])
    return (
        <>
            <Navbar size={cart.length} />
            <Product />

            <Footer />
        </>
    )
}

export default Home
