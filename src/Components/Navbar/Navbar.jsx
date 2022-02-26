import React, { useEffect,useState } from 'react'
import "./navbar.css"
import Cart from "@material-ui/icons/AddShoppingCart"
import logo from '../../Amazon.png'
import Badge from '@material-ui/core/Badge'  
import { signInWithPopup,signOut } from "firebase/auth";
import { auth, provider } from "../../firebase-config";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

function Navbar({ auther,setAuth }) {
  const products = useSelector(state=> state.cart.products)
  let navigate = useNavigate();

  const [search, setSearch] = useState("");

  const signinwithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      const name = result.user.displayName;
      localStorage.setItem("name", name);
      setAuth(true);
    })}

    const signout = () => {
      signOut(auth,provider).then((result) => {
        localStorage.setItem("name", "");
        setAuth(!true);
      })}

  return (
    <div className='navbar'>
        <img src={logo} onClick={() => {navigate('/')}} />
        <input type='search' placeholder='Search...' />
        {
        auther ?  <button onClick={signout}> Logout </button> : <button onClick={signinwithgoogle}> Login </button>
        }
        <p> Hello  {localStorage.getItem("name")} </p>
        <Badge badgeContent={products.length} color="secondary" >
            <Cart className="cart" onClick={() => {navigate('/cart')}} />
        </Badge>
        
    </div>
  )
}
        

export default Navbar