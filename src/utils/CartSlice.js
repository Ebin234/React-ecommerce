import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        totalCount: 0,
        userCart: []
    },
    reducers: {
        setCart: (state, action) => {
            const data = state.userCart.find(item => item.name === action.payload.name)
            if (data) {
                data.count += 1;
                state.totalCount += 1;
            } else {
                const obj = {
                    name: action.payload.name,
                    price: action.payload.price,
                    count: 1,
                }
                state.userCart.push(obj);
                state.totalCount += 1;
            }
        },
        removeItem: (state, action) => {
            state.userCart = state.userCart.filter(item => item.name !== action.payload.name)
            state.totalCount = state.totalCount - action.payload.count
        }
    }
})

export const { setCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;