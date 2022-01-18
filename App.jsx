import './App.css'
import {Footer, Loader,Navbar,Service,Transaction,Welcome} from './components'
const  App = () => {
 

  return (
               <div className=" min-h-screen">
    <div className='gradient-bg-welcome'>
      <Navbar/>
      <Welcome/>
    </div>
    <div>
    
     
      <Service/>
  
      <Transaction/>
      <Footer/>
      </div>
    </div>

   
  )
}

export default App
