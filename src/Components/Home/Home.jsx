import React from 'react'
import deal from '../../images/Deals.jpg'
import elec from '../../images/electronics.jpg'
import comp from '../../images/comp.jpg';
import returns from '../../images/easy_returns.jpg'
import './home.css'


function Home() {


  return (
    <div className='home'>
      <div className='products'>
      <div className='product'>
        <p>Deals & Promotions </p>
        <img src={deal} alt='amazon' />
      </div>
    
      <div className='product'>
        <p>Electronics</p>
        <img src={elec} alt='amazon' />
      </div>

      <div className='product'>
        <p>Easy returns  </p>
        <img src={returns} alt='amazon' />
      </div>

      <div className='product'>
        <p>Computers & Accessories </p>
        <img src={comp} alt='amazon' />     
      </div>
      
    </div>
    </div>
  )
}

export default Home