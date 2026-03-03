import React from 'react';
import ProductSkeleton from '../components/skeleton/ProductSkeleton';

const loading = () => {
    return (
        <div className='grid md:grid-cols-3 gap-8 py-6'>
            {[...Array(9)].map((_, index)=>(
                <ProductSkeleton key={index}></ProductSkeleton>
            ))}
        </div>
    );
};

export default loading;