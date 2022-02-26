import React,{ useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom' 
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Product from './Components/Product/Product'
import Cart from './Components/Cart/Cart'

function App() {
  const [auther, setAuth] = useState(false);
  console.log(auther);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<> <Navbar auther={auther} setAuth={setAuth} /> <Home /> <Products /></> }/>

          <Route exact path='/product/:id' element={ <> <Navbar />   <Product /> </>} />

          <Route exact path='/cart' element={<> <Navbar /> <Cart /> </> } />
        </Routes>
      
      </Router>
    </div>
  )
}

export default App
