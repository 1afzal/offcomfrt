import React from "react";
import { Link } from "react-router-dom";

function MiniProduct({ products }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-3 gap-y-10 gap-x-20">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="flex flex-col items-center font-black">
              <div className="h-128 w-full flex items-center justify-center">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <p className="mt-2 text-center">{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default MiniProduct;