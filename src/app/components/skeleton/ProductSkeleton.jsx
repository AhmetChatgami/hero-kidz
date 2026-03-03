import React from "react";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="card bg-base-100 shadow-md p-4">
        <div className="skeleton h-48 w-full rounded-xl"></div>
        <div className="card-body px-0 space-y-3">
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-1/2"></div>
          <div className="skeleton h-6 w-1/3"></div>
          <div className="skeleton h-10 w-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
