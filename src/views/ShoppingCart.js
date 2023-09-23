import React, {useEffect, useState} from 'react';
import cart from '../assets/icons/shopping_cart.svg';
import ShoppingList from '../components/ShoppingList';
import { useSelector } from 'react-redux';

export const ShoppingCart = ({ setIsShowCart, isShowCart }) => {
	
	const productSelector = useSelector((state) => state.shopingcard.productState);	
	const total = Number(productSelector.reduce((prevValue, item) => prevValue + item.cost, 0).toFixed(2));
	const [showOpacityCart, setShowOpacityCart] = useState(0);

	const timeOut = (ms) => {
		return new Promise(resolve => setTimeout(resolve, ms))
	};
	
	const hideHandler = async() => {		
		setShowOpacityCart(2) //animation
		await timeOut(1000)
		setIsShowCart(false);
	};

	useEffect(() => {
		if(isShowCart ) {
			setShowOpacityCart(1) //animation
			return
		}
	}, [isShowCart]);

	return (
		isShowCart && <div className={`absolute right-0 top-0 bottom-0 flex flex-col w-full sm:w-2/4 lg:w-2/6 bg-gray-800 text-white py-10 px-2 opacity-0 ${showOpacityCart === 1 && 'transition-all opacity-100 duration-700'} ${showOpacityCart === 2 && 'transition-all opacity-0 duration-700'} z-50`}>

			<div className='absolute bg-gray-800 left-0 sm:-left-11 top-0 w-12 h-12 font-semibold text-xl flex justify-center items-center cursor-pointer' onClick={hideHandler}>
				X
			</div>
			<div className='w-full py-2'>
				<div className='flex justify-center items-center'>
					<div className='flex items-end mr-8'>
						<img src={cart} alt='cart' className='w-10' />
						<span className='flex justify-center items-center w-5 h-5 rounded-full bg-yellow-500 text-black text-xs font-semibold'>{productSelector.length}</span>
					</div>
					<p className='font-semibold'>Cart</p>
				</div>
			</div>
			<div className='flex flex-1 flex-col w-full py-3 overflow-auto'>
				{
					productSelector.length > 0 
					? productSelector.map((value, index) => 
						<ShoppingList key={index} product={value} />
						) 
					: <div className='flex justify-center items-center w-full h-full'><p className='text-shoppingCard'>Add products to cart :)</p></div>
				}
				</div>
			<div className='flex flex-col gap-5 bg-gray-800 p-3'>
				<div className='flex justify-between items-center'>
					<p className='text-sm text-gray-400'>SUBTOTAL</p>
					<p className='text-2xl text-yellow-600'>$ {total}</p>
				</div>
				<button className='bg-black w-full py-3 text-center'>CHECKOUT</button>
			</div>
		</div>
	);
};
