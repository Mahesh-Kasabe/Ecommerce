import React, { useEffect,useState } from 'react'
import "./navbar.css"
import Cart from "@material-ui/icons/AddShoppingCart"
import logo from '../../Amazon.png'
import Badge from '@material-ui/core/Badge'  
import { signInWithPopup,signOut } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const products = useSelector(state=> state.cart.products)
  let navigate = useNavigate();
    
    const signinwithgoogle = ({ setAuth }) => {
    signInWithPopup(auth, provider).then((result) => {
      const name = result.user.displayName;
      localStorage.setItem("name", name);

    })}

    const signout = () => {
      signOut(auth,provider);
      localStorage.setItem("name", "");

    }

  return (
    <div className='navbar'>
        <img src={logo} />
        <input type='search' placeholder='Search...' />
        <button onClick={signinwithgoogle}> Login </button>
        <button onClick={signout}> Logout </button>
        <p> Hello  {localStorage.getItem("name")} </p>
        <Badge badgeContent={products.length} color="secondary" >
            <Cart className="cart" onClick={() => {navigate('/cart')}} />
        </Badge>
        
        
    </div>
  )
}
        

export default Navbar