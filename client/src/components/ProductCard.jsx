import React from "react";
import { Link } from "react-router-dom";

function ProductCard({product}){
    return(
        <Link to={`/product/${product.id}`}>
            <div className="flex flex-col">
                <div className="height-128 w-full">
                    <img src={product.images[0]} alt={product.name}/>
                    <h1 className="text-center">{`₹${product.price}`}</h1>
                </div>
            </div>
        </Link>

    )
}
export default ProductCard;