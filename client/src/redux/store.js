import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import cartReducer from './user/cartSlice';



const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})


export default store