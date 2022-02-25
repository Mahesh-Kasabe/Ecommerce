import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        products: [],
        total: 0,
    },
    reducers: {
        addProduct:(state,action) => {
            state.products.push(action.payload);
            state.total += action.payload.price;
        }
    } 
})

export const { addProduct } =  cartSlice.actions;
export default cartSlice.reducer;