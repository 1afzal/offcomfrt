import React from "react";
import { useState } from "react";
import { products } from "../data/product";
import { useParams } from "react-router-dom";

function ProductPage() {
  const [selectedsize, setSelectedSize] = useState("");
  const { id } = useParams();
  const product = products.find((p) => p.id ===(id));

  if (!product) {
    return <h1>Product not found...</h1>;
  }
  return (
    <div className="flex flex-row justify-around h-screen items-center">
      <div className="w-64 object-cover">
        <h1 className="font-black text-lg ">{product.name}</h1>
        <p className="text-sm">{product.description}</p>
      </div>

      <div>
        <img className="h-128 w-full" src={product.images[0]} alt={product.name}/>
        <p className="text-center text-sm">{` $${product.price}`}</p>
      </div>

    <div>
      <div className="w-64 object-cover flex gap-2">
        {product.sizes.map((size)=>(
            <button
             key={size}
             className={`px-4 py-4 ${selectedsize === size ? "bg-black text-white" : " "}`}
             onClick={()=> setSelectedSize(size)
             }>{size}</button>
        ))}

      </div>
      <div className="flex flex-col gap-5 justify-center items-center mt-10">
        <button className="bg-black text-white font-bold px-2 py-2 w-fit px-4 ">Add to cart</button>
        <button className="bg-black text-white font-bold px-2 py-2  w-fit px-6 " >Buy now</button>
      </div>
    </div>
    </div>
  );
}
export default ProductPage;
