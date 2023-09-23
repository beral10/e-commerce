import React, { useState } from 'react';
import { ProductList } from '../components/ProductList';
import { SizesClothing } from '../components/SizesClothing';

export const Products = () => {
	const [selectedSize, setSelectedSize] = useState(null);

	return (
		<>		
			<div className='w-full h-full overflow-auto p-1 sm:p-4'>
				<div className='flex flex-col gap-4 p-1'>
					<SizesClothing setSelectedSize={setSelectedSize} />
					<ProductList selectedSize={selectedSize} />
				</div>
			</div>		
		</>
	);
};
