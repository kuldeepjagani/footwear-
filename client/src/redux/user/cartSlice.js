import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.carts.findIndex((item) => item._id === action.payload._id)
            console.log(itemIndex)
            if (itemIndex !== -1) {
                state.carts[itemIndex].cartTotalQuantity += 1;
                console.log(state.carts[itemIndex].cartTotalQuantity)

                console.log("inside")
            } else {

                const tempProduct = { ...action.payload, cartTotalQuantity: 1 }
                console.log("other")
                state.carts.push(tempProduct);
            }

        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;