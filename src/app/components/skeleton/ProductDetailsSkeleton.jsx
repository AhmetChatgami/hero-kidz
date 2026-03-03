// src/app/components/skeleton/ProductDetailsSkeleton.jsx
import React from 'react';

const ProductDetailsSkeleton = () => {
    return (
        <div className="container mx-auto px-4 py-10 animate-pulse">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 rounded-2xl">
                
                {/* Image Skeleton */}
                <div className="bg-gray-200 h-[400px] md:h-[500px] w-full rounded-xl"></div>

                {/* Info Skeleton */}
                <div className="flex flex-col space-y-4">
                    <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    
                    <div className="flex gap-4">
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                    </div>

                    <div className="h-20 bg-gray-100 rounded-lg w-full"></div>

                    <div className="space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-full"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>

                    <div className="flex gap-4 mt-auto">
                        <div className="h-14 bg-gray-200 rounded-xl flex-1"></div>
                        <div className="h-14 bg-gray-200 rounded-xl flex-1"></div>
                    </div>
                </div>
            </div>

            {/* Description Skeleton */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-12 bg-gray-200 rounded w-full"></div>
                    <div className="h-12 bg-gray-200 rounded w-full"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;