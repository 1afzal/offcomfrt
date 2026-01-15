import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = products.find(p => p.id === id);


  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 grid grid-cols-2 gap-20">
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full object-contain"
      />

      {/* Details */}
      <div>
        <h1 className="text-3xl font-black">{product.name}</h1>
        <p className="text-xl mt-2">₹{product.price}</p>
        <p className="mt-2">
          ⭐ {product.rating} ({product.reviewsCount} reviews)
        </p>

        <p className="mt-6 text-gray-600">{product.description}</p>

        {/* Sizes */}
        <div className="mt-6 flex gap-3">
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border px-4 py-2 ${
                selectedSize === size ? "bg-black text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() => addToCart(product, selectedSize)}
            className="bg-black text-white px-6 py-3"
          >
            Add to Cart
          </button>
          <button className="border px-6 py-3">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
