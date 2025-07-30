import { useEffect, useRef, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad]=useState(false)

    function handleClick(){
        setLoad(true)
    }

    useEffect(()=>{
        console.log("UseEffect")
    },[])

    useEffect(()=>{

        async function fetchProducts() {
            const response=await fetch("/product.json")
            const data=await response.json();
            setProducts(data)
        }
        if(load){
           fetchProducts()
        }
    },[load])

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
