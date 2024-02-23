import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      const newState = state;
      newState.totalQuantity = action.payload;
      newState.itemsList = action.payload.itemsList;
    },
    addToCart(state, action) {
      const newState = state;
      newState.changed = true;
      const newItem = action.payload;
      const existingItem = newState.itemsList.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        newState.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      newState.totalQuantity += 1;
    },
    removeFromCart(state, action) {
      const newState = state;
      newState.changed = true;
      const id = action.payload;
      const existingItem = newState.itemsList.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          newState.itemsList = newState.itemsList.filter((item) => item.id !== id);
        } else {
          existingItem.quantity -= 1;
          existingItem.totalPrice -= existingItem.price;
        }
        newState.totalQuantity -= 1;
      }
    },
    setShowCart(state) {
      const newState = state;
      newState.showCart = !newState.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
