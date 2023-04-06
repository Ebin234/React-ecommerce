import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: []
    },
    reducers: {
        setProducts: (state, action) => {
            // console.log("action",action.payload)
            state.items = action.payload;
        },
        decreaseCount: (state, action) => {
            state.items.find(item => item.name === action.payload).count -= 1;
            // console.log("state",state.items[1].count)
        },
        increaseProductCount: (state, action) => {
            state.items.find(item => item.name === action.payload.name).count += action.payload.count;
        }
    }
})

export const { setProducts, decreaseCount, increaseProductCount } = productSlice.actions;
export default productSlice.reducer;