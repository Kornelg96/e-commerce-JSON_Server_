import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './shoppingcartRedux'

export default configureStore({
    reducer:{
        shoppingCart: cartReducer,
        

    }
})