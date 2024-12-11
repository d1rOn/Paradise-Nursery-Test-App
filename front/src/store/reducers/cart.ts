import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICart } from '~/interfaces/cart.interface';

interface IInitialState {
  cart: ICart[];
}

const initialState: IInitialState = {
  cart: [],
};

// Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<ICart>) => {
      const existingItem = state.cart.find((item) => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += payload.quantity;
      } else {
        state.cart.push({ ...payload, quantity: payload.quantity || 1 });
      }
    },
    incrementProduct: (state, { payload }: PayloadAction<number>) => {
      const item = state.cart.find((cartItem) => cartItem.id === payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementProduct: (state, { payload }: PayloadAction<number>) => {
      const item = state.cart.find((cartItem) => cartItem.id === payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cart = state.cart.filter((cartItem) => cartItem.id !== payload);
        }
      }
    },
    removeProduct: (state, { payload }: PayloadAction<number>) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Actions
export const {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  clearCart,
} = cartSlice.actions;

// Selectors

interface ISelectCart {
  (state: { cart: IInitialState }): ICart[];
}

export const selectCart: ISelectCart = (state) => state.cart.cart;

interface ISelectCartTotalValue {
  (state: { cart: IInitialState }): number;
}

export const selectCartTotalQuantity: ISelectCartTotalValue = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotalPrice: ISelectCartTotalValue = (state) =>
  state.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0);

// Reducer
export default cartSlice.reducer;
