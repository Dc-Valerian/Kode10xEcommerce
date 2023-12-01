import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface CartData {
  title: string;
  desc: string;
  price: number;
  CartQuantity: number;
  _id: string;
  category: string;
}

const initialState = {
  currentUser: {} as UserData | null,
  cart: [] as Array<CartData>,
  totalPrice: 0,
  totalQuantity: 0,
};

const ReduxState = createSlice({
  name: "First-Ecommerce",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartData>) => {
      const CheckPosition = state.cart.findIndex(
        (position) => position._id === payload._id
      );

      if (CheckPosition >= 0) {
        state.cart[CheckPosition].CartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          CartQuantity: 1,
        });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<CartData>) => {
      const outOfCart = state.cart.findIndex(
        (position) => position._id === payload._id
      );

      if (state.cart[outOfCart].CartQuantity > 1) {
        state.cart[outOfCart].CartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((out) => out._id !== payload._id);
      }
      state.totalQuantity -= 1;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = ReduxState.actions;

export default ReduxState.reducer;
