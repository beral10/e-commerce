import React from 'react';

export const SizesClothing = ({setSelectedSize /* setFilteredProducts */}) => {
	
	/* const handleSizeClick = (size) => {
		setSelectedSize(size);
		console.log(size);
		const filtered = products.filter(product => product.availableSizes === size);
		setFilteredProducts(filtered);
	}; */

	return (
		<div className='flex flex-col gap-2 justify-center items-center sm:justify-start sm:items-start w-full'>
			<h4 className='font-semibold'>Sizes:</h4>
			<div className='flex flex-wrap gap-2'>
				<div className='cursor-pointer' onClick={() => setSelectedSize('XS')} >
					<span className='span-clothing text-xs'>XS</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('S')}>
					<span className='span-clothing text-xs'>S</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('M')}>
					<span className='span-clothing text-xs'>M</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('ML')}>
					<span className='span-clothing text-xs'>ML</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('L')}>
					<span className='span-clothing text-xs'>L</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('XL')}>
					<span className='span-clothing text-xs'>XL</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('XXL')}>
					<span className='span-clothing text-xs'>XXL</span>
				</div>
				<div className='cursor-pointer' onClick={() => setSelectedSize('')}>
					<span className='flex justify-center items-center rounded-md w-24 sm:h-10 h-8 text-xs border border-black border-opacity-0 hover:border-opacity-100 bg-slate-200'>SHOW ALL</span>
				</div>
			</div>
		</div>
	);
};
