// ..................cart il cheytha conditions "store" il koduthale work aaku.......................

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Cart";

export const store = configureStore({ // store export cheyyanam "react" il use cheyyan
    reducer:{ // cart.js il ulla reducer aan ivide use cheythath
        cart: CartReducer, // ivide ulla "cart" ishtamulla name aan
    },
})

// ee "store" nammude provider aaya "index.js" il iduka