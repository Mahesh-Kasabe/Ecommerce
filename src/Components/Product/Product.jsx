import React,{ useState, useEffect } from 'react'
import { getDoc,collection,doc } from "firebase/firestore"
import { db } from "../../firebase-config.js"
import "./product.css"
import { useParams } from 'react-router-dom'
import { addProduct } from '../../redux/cartRedux.js'
import { useDispatch } from "react-redux"

function Product({ id }) {
    const [product, setProduct]  = useState([]);
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    const dbcollection = collection(db, "products");
    const params = useParams();

    useEffect(() => {
      getData();
    }, []);

    async function getData(){
      try{
      const productTemp = await getDoc(doc(db, "products", params.id));
      
      setProduct(productTemp.data());
      }
      catch(err){
        console.log(err);
      }
    } 
 
  return (
        <div className='desc'>
            <div className='image'>
            <img src={product.productimage} alt='' />
            </div>
            <div className="name">
            <h1>{product.productname}</h1>
            <p>{product.Description} </p>

            <h1>Price: ${product.price}</h1>

            <button onClick={() => {
                dispatch(addProduct({ quantity })) }}> Add to Cart </button>
            </div>
        
    </div>
  )
}

export default Product