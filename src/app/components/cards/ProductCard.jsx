"use client";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  //   if (loading) {
  //     return (
  //       <div className="card bg-base-100 shadow-md p-4">
  //         <div className="skeleton h-48 w-full rounded-xl"></div>
  //         <div className="card-body px-0 space-y-3">
  //           <div className="skeleton h-4 w-3/4"></div>
  //           <div className="skeleton h-4 w-1/2"></div>
  //           <div className="skeleton h-6 w-1/3"></div>
  //           <div className="skeleton h-10 w-full rounded-lg"></div>
  //         </div>
  //       </div>
  //     );
  //   }

  const { title, image, price, discount, ratings, reviews, sold } = product;

  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(0)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      <figure className="relative h-52 w-full">
        <Image
          
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
        {discount > 0 && (
          <div className="badge badge-error absolute top-3 right-3">
            -{discount}%
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title text-base line-clamp-2">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span>{ratings}</span>
          </div>
          <span>({reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>
          {discount > 0 && (
            <span className="text-sm line-through text-gray-400">৳{price}</span>
          )}
        </div>

        {/* Sold */}
        <p className="text-sm text-gray-500">{sold} sold</p>

        {/* Add to Cart Button */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary w-full gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
