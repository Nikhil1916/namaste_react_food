import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },

        removeItem:(state, action) => {
            state.items = state.items.filter((_)=>_.id!=action.payload);
        },

        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;


export const {addItem, removeItem, clearItems} = cartSlice.actions;