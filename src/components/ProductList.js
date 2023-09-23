import React from 'react';
import { ProductCard } from './ProductCard';
import { clothes } from '../data/clothes';

export const ProductList = ({ selectedSize }) => {
	
	const productsFilter = selectedSize ? clothes.filter((product) => {
		return product.availableSizes.includes(selectedSize)
	}) : clothes;
	
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-3 sm:justify-items-center sm:items-center'>
			{
				productsFilter.map((product) => (
					<ProductCard key={product.id} product={product} selectedSize={selectedSize}/>
				))
			}
		</div>
	);
};
