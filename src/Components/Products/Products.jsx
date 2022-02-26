import React,{ useState,useEffect } from 'react'
import { getDocs,collection } from "firebase/firestore"
import { db } from "../../firebase-config.js"
import "./products.css"
import { useNavigate } from "react-router-dom"

function Products() {
  const [products, setProducts]  = useState([]);
  const dbcollection = collection(db, "products");
  let navigate = useNavigate();

  useEffect(() => {
    const getproducts = async () => {
      const data = await getDocs(dbcollection);
      setProducts(data.docs.map((doc) => ({
        ...doc.data(), id: doc.id 
      })));
    }
    getproducts();
  }, []);
  
    return (
    <div className='home'>
        <h1>Products</h1>
    <div className='products'>
      {
        products.filter((product, index)=>  index < 4).map((product) => {
          return(
              
              <div className="product">
              <p>{product.productname} </p>
              <img src={product.productimage} alt='amazon' />
              <button id='btn' onClick={() => {navigate(`/product/${product.id}`)} }> View </button>
              <br/>
              </div>
          )
        })
      }
        </div>
    </div>
  )
}

export default Products