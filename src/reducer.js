import React from 'react';
import {combineReducers} from 'redux';
import CartReducer from './cartReducer'
export default combineReducers({
    cart:CartReducer
})