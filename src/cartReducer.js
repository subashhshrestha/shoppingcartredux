import React from 'react';
const initialState={
    cartItem:[]
}
function CartReducer(state=initialState,action){
    switch(action.type){
        case 'Add':
        // console.log(action.payload);
        let findItem=state.cartItem.find(item=>item.id===action.payload.id)
        // console.log("foundItem",findItem)
        if(findItem==null||findItem==''){
        return{...state,cartItem:[...state.cartItem,action.payload]}
        }else{
           let index=state.cartItem.indexOf(findItem);
           let newState=[...state.cartItem];
        //    let newArr=state.cartItem[index];
        //    newArr.quantity=newArr.quantity+1;
        newState[index]['quantity'] +=1;
           return {...state,cardItem:newState}
            // console.log("index",index);
            // console.log("indexItem",newState[index]);


        }
    
    default:
    return state;
    }
}
export default CartReducer;