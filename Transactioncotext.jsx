import React, { useEffect, useReducer, useState } from 'react'

export const Transactioncontext = React.createContext({
item:[],
additem : (item) =>{},
isloading:false,
});
const defaultCartState = {
    item: [],
    isloading:false
   
  };

const {ethereum} = window;

const CartReducer = (state,action) =>{
    let updateitem;
    
    if (action.type === 'Add'){
        updateitem = [...state.item];
        updateitem.push(action.item);
        return {
            item:[...updateitem],
          
        }
    }
    return defaultCartState;
   
}

 const TransactionProvider = (props) =>{
      const [cartstate, dispatchCartAction] = useReducer( CartReducer, defaultCartState)
      const [load, setload] = useState(false);
      const additemshandler = (item) =>{
    
    dispatchCartAction({type:'Add', item:item})
    setload(true);
}

    
   
   
   const itemholder = [...cartstate.item]
   console.log(itemholder)
   const fetchdata = async() => {
       const res = await fetch('https://movieapi-6269e-default-rtdb.firebaseio.com/ethe.json', {
           method:'POST',
           body:JSON.stringify(...cartstate.item),
        })
        
   }
  ;
 
  const cartContext = {
    item:cartstate.item,
 
    isloading:load,
    additem:additemshandler,
}
 fetchdata()

     return(<Transactioncontext.Provider value = {cartContext}>
                   {props.children}
           </Transactioncontext.Provider>)
};
export default TransactionProvider;