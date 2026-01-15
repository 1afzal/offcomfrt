import React from "react";

const products = [
  {
    src: "https://offcomfrt.in/cdn/shop/files/2_3455f426-83c4-4678-a51e-5f2c319072e2.png?v=1758635386",
    alt: "Waffle Hoodie",
    name: "WAFFLE-001(B)"
  },
  {
    src: "https://offcomfrt.in/cdn/shop/files/WAFFLE_001_FINAL.png?v=1760212244",
    alt: "Waffle Tee",
    name: "WAFFLE-001(W)"
  },
  {
    src: "https://offcomfrt.in/cdn/shop/files/lwrr.png?v=1750446777",
    alt: "LWR",
    name: "LWR-001(B)"
  },
  {
    src: "https://offcomfrt.in/cdn/shop/files/22_d09d1b44-60a9-48fd-8854-91a7d5bbfbbe.png?v=1766673290",
    alt: "Sweatshirt",
    name: "GRAY-SWEATS"
  },
  {
    src: "https://offcomfrt.in/cdn/shop/files/47.png?v=1758637603",
    alt: "Vest",
        name: "VEST-001(B)"

  },
  {
    src: "https://offcomfrt.in/cdn/shop/files/6.png?v=1754012206",
    alt: "Raglan Tee",
    name: "RAGLAN-TEE"
  },
];
function MiniProduct() {
    return (
      <div className="max-w-6xl mx-auto ">
        <div className="grid grid-cols-3 gap-y-10 gap-x-20">
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex flex-col items-center font-black">
                {/* Image box */}
                <div className="h-128 w-full flex items-center justify-center">
                  <img
                    src={product.src}
                    alt={product.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-2 text-center">{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
export default MiniProduct;  