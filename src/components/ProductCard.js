import React, { useState } from 'react';
import { percentageApplied } from '../utils/discountRate';
import { valueWithStyles } from '../utils/valueWithStyles';
import { useDispatch } from 'react-redux';
import { notificationActions, shopingCardActions } from '../store/slices';

export const ProductCard = ({ product, selectedSize }) => {
	const { currencyFormat, id, installments, isFreeShipping, price, sku, style, title } = product;
	//console.log(product);
	const dispatch = useDispatch();
	const [isHovered, setIsHovered] = useState(false);

	/* availableSizes: ['X', 'L', 'XL', 'XXL'],
		currencyFormat: '$',
		currencyId: 'USD',
		description: '14/15 s/nº',
		id: 0,
		installments: 9,
		isFreeShipping: true,
		price: 10.9,
		sku: 8552515751438644,
		style: 'White T-shirt',
		title: 'Cropped Stay Groovy off white', */

	/* const productSelector = useSelector((state) => state.shopingcard.productState); */

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const imagenURL = isHovered
	? require(`../assets/productsImage/${sku}-2-product.webp`)
	: require(`../assets/productsImage/${sku}-1-product.webp`)

	const bgButton = isHovered
	? 'bg-yellow-500'
	: 'bg-black'


	const addProductHandler = () => {
		if(selectedSize) {
			dispatch(
				shopingCardActions.addProduct({
					size: selectedSize,
					description: style,
					id,
					price,
					sku,
					title,
					quantity: 1,
					cost: price,
				})
			);
			dispatch(notificationActions.showNotification({
				type: 'success',
				message: 'Product successfully added!',				
			}))
		} else {
			dispatch(notificationActions.showNotification({
				type: 'alert',
				message: 'Select a size to continue.',
			}))
		}
	};

	return (
		<div 
			className='relative flex flex-col justify-between items-center max-w-xs sm:w-52 xl:w-56 h-[500px] p-1 sm:p-2' 
			onMouseEnter={handleMouseEnter}		
			onMouseLeave={handleMouseLeave}
		>
			{
				isFreeShipping && <div className='absolute bg-black text-white right-1 sm:right-2 py-1 px-2 text-xs'>Free shipping</div>
			}
			<div className='w-full h-72'>
				{/* <div className='relative h-full'> */}
					<img className='object-cover w-full h-full' src={imagenURL} alt='styleClothes' />
				{/* </div> */}
			</div>
			<p className='text-center'>{title}</p>
			<div className='flex flex-col justify-center items-center'>
				<p className='flex items-center gap-1'>
					<small>{currencyFormat}</small>
					<span>{valueWithStyles(price)}</span>
				</p>
				<p className='flex items-center gap-1 text-center text-gray-500'>
					<span>or {installments} x </span>
					{currencyFormat}
					<span>{percentageApplied(installments, price).toFixed(2)}</span>
				</p>
			</div>
			<button onClick={addProductHandler} className={`w-full py-2 px-4 text-center ${bgButton} text-white font-medium transition duration-300`}>
				Add to cart
			</button>
		</div>
	);
};
