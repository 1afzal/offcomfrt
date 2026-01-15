import React from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

function Home(){
    return(
        <div className="max-w-6xl mx-auto py-10 grid grid-cols-3 gap-10 ">
            {products.map((p)=>(
                    <ProductCard key={p.id} product={p} />
            ))}
        </div>

    )
}

export default Home;