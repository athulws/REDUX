// ---------------This for Redux condition---------------



// -----------------Basic Theory Part--------------------

// 1. Provider --> store ne react ne state nte roopathil inject cheyyan help cheyyunnath
// 2. Store ---> first oru state undakm ath store il vakkm
// 3. Reducer ---> action um state um thammilulla logic um karyangalum implement cheyyunnath
// 4. Action ---> actions okk nadathan ie, nammal ee onclick okk button kodukkoole ath pole

//"store" onn mathrame undaku, redux ne multiple "store" kodukkan pattilla
//reducer multiple times create cheyyam

//Redux condition ne vilichal react nte file il export cheythal mathram pora athine call um cheyyanam, athinaan "useDispatch" import cheyyuka



                       //redux tool-kit advantage
                    //-----------------------------

//redux il state mutable aan karanam backgrund il "immer.js" enna library aan use cheyyunnath, ith state nte oru copy create cheyth athil aan update cheyyunnath ennitt aa value aan return cheyyunnath
//react redux um aayit communication cheyyan aan "Provider"

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartList: [],
    cartCount:0,
};

const cartSlice = createSlice({
    name:"cart", // redux identify cheyyanulla unique name
    initialState: INITIAL_STATE,
    reducers:{
        addToCart: (state) =>{
            state.cartCount = 1;
        },
        increment: (state) =>{
            state.cartCount += 1;
        },
        decrement: (state) =>{
            state.cartCount -= 1;
        }
    }
})

//addToCart,increment,decrement okk use cheyyan,
export const {increment, decrement, addToCart} = cartSlice.actions;

export default cartSlice.reducer; // ith store ilekk store cheyyan, ie:- In store.js




