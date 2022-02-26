import React,{ useEffect, useState } from 'react'
import "./cart.css"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"  

const KEY = "STRIPE_API";


function Cart() {

  const [stripeToken, setStripeToken] = useState(null)

  const onToken= () => {
    setStripeToken(token);
  }

  const products = useSelector(state=>state.cart.products);
  const [total, setTotal] = useState(0); 

  useEffect(() => {
    let temp = 0;
    products.forEach((product) => {
      temp = temp+(product.product.price);
    })
    setTotal(temp);
  }, [products]);

  console.log(products); 
  return (
    <div className='cart'>
        <div className='label'>
          {
            products.map((product)=> {
              return(
                <div className='product'>
                <img src={product.product.productimage} alt='' />
    
                <div className='info'>
                <h2>{product.product.productname}</h2>
                <p>{product.product.Description}</p>
                <p>$ {product.product.price}</p>
                </div>
              </div>
              )
            })
          }
        </div>

        <div className='bill'>
            <h1>Order Summary</h1>
            <p>Thank You for Shopping With Us :)</p>
            <p>Total: ${total}</p>
            <StripeCheckout
              name="Amazon"
              billingAddress
              shippingAddress
              description={`Your Total is $${total}`}
              amount={total*100}
              token={onToken}
              stripeKey={KEY}
            >
              <button> CheckOut </button>
            </StripeCheckout>
            
        </div>        
    </div>
  )
}

export default Cart