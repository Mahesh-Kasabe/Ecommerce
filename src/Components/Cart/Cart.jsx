import React from 'react'
import logo from "../Amazon.png"
import "./cart.css"

function Cart() {
  return (
    <div className='cart'>
        <div className='label'>
            <div className='product'>
            <img src={logo} alt='' />

            <div className='info'>
            <h2>Product: Amazon</h2>
            <p>ID: 623872hj3</p>
            <p>Price : $2000</p>
            </div>

            </div>

            <div className='product'>
            <img src={logo} alt='' />
            
            <div className='info'>
            <h2>Product: Amazon</h2>
            <p>ID: 623872hj3</p>
            <p>Price : $2000</p>
            </div>

            </div>

            <div className='product'>
            <img src={logo} alt='' />
            
            <div className='info'>
            <h2>Product: Amazon</h2>
            <p>ID: 623872hj3</p>
            <p>Price : $2000</p>
            </div>

            </div>
        </div>

        <div className='bill'>
            <h1>Order Summary</h1>
            <p>Thank You for Shopping With Us :)</p>
            <p>Total: $2000</p>
            <button> CheckOut </button>
        </div>        
    </div>
  )
}

export default Cart