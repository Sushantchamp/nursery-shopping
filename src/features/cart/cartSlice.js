import { createSlice, nanoid } from '@reduxjs/toolkit'

// local storage of the data/items
const getLocalCartData = () => {
    const cartData = localStorage.getItem("localCart")
    if (cartData) {
        return JSON.parse(cartData);
    } else {
        return [];
    }
}

const initialState = {
    items: getLocalCartData(),
}

const addItem = (state, action) => {
    const existingItem = state.items.find((item) => item.id === action.payload.id)
    if (existingItem) {
        incrementItem(state, { payload: existingItem.id });
    } else {
        const newItem = {
            id: nanoid(),
            ...action.payload,
            quantity: 1,
        }
        state.items.push(newItem)
    }


}
const removeItem = (state, action) => {
    state.items = state.items.filter((item) => item.id !== action.payload)

}

const decrementItem = (state, action) => {
    const id = action.payload
    const item = state.items.find((item) => item.id === id)

    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeItem(state, { payload: item.id })
        }
    }
}
const incrementItem = (state, action) => {
    const id = action.payload
    const item = state.items.find((item)=>item.id === id)
    if(item){
        item.quantity+=1;

    }

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: addItem,
        removeFromCart: removeItem,
        decrementQuantity: decrementItem,
        incrementQuantity: incrementItem,
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, decrementQuantity, incrementQuantity } = cartSlice.actions