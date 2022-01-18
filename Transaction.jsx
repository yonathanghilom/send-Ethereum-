import { useEffect, useState } from "react";
import classes from './transaction.module.css'
const Transaction = (props)=>{
  const [additems, setadditems] = useState([])
    const Fetchingdata = async() =>{
        let itemholder = []
    const res =     await fetch('https://movieapi-6269e-default-rtdb.firebaseio.com/ethe.json')
    const data = await res.json();
    // console.log(data)

  
    for (const key in data) {
        const quoteObj = {
          id: key,
          ...data[key],
        };
      itemholder.push(quoteObj);

    }
    setadditems(itemholder)
            }
                
   
    useEffect(() =>{
        Fetchingdata()
    },[Fetchingdata])
     
    return <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions text-white">
           <div  className="flex flex-col md:p-12 py-12 px-4">
             <div className="flex flex-col md:p-12 py-12 px-4">
             {
                 (additems.length !== 0) ?( <h3 className="text-white text-3xl text-center my-2">  Latest Transactions </h3>) : ''
                
                }
                 
            </div>  
                <ul className= {classes.ul}> 

                             {
                   additems.map((items) =>{
                       return(<li key={items.id} className= {classes.li}>
                          <div >
                              <div> address = {items.addresseth}</div>
                              <div>amount = {items.amounteth}</div>
                              <div> keyword = {items.keywordeth}</div>
                              <div> message = {items.messageeth}</div>

                          </div>
                       </li>)
                   })
                   }
                </ul>
                  
               
           </div>
         
    </div>

}
export default Transaction;