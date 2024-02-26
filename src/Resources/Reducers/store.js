// store.js
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import setUserReducer from "./setUserReducer";  
import SignedInReducer from "./SignedInReducer";

export default configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartItemsReducer,
    user: setUserReducer,
    signedIn: SignedInReducer,
  }
});
