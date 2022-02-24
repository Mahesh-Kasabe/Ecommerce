import React, { useEffect } from 'react'
import "./navbar.css"
import Cart from "@material-ui/icons/AddShoppingCart"
import logo from '../../Amazon.png'
import Badge from '@material-ui/core/Badge'  
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const quantity = useSelector(state=> state.cart.quantity)
  let navigate = useNavigate();

    const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const name = result.user.displayName;
      localStorage.setItem("name", name);
    })}

  return (
    <div className='navbar'>
        <img src={logo} />
        <input type='search' placeholder='Search...' />
        <button onClick={signinwithgoogle}> Login </button>
        <p>Hello, {localStorage.getItem("name")} </p>
        <Badge badgeContent={quantity} color="secondary" >
            <Cart className="cart" onClick={() => {navigate('/cart')}} />
        </Badge>
        
        
    </div>
  )
}
        

export default Navbar