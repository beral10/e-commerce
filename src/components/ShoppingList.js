import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { shopingCardActions } from '../store/slices';
import ConfirmModal from './ConfirmModal';

const ShoppingList = (props) => {
	const { description, price, quantity, size, sku, title, id, cost,  } = props?.product;

	const newCost = Number(cost.toFixed(2));

	const [isOpenModal, setIsOpenModal ] = useState(false);

	const dispatch = useDispatch();

	const updateProductHandler = () => {
		dispatch(shopingCardActions.addProduct(
			{id, size}
		));
	};

	const removeProductHandler = () => {		
		dispatch(shopingCardActions.deleteProduct({
			id, size
		}))
	};

	const removeProductComplete = () => {
		setIsOpenModal(!isOpenModal);
		
		/* dispatch(shopingCardActions.removeProductComplete({
			id,
		})) */		
	};

	return (
		<div className='flex items-center justify-between pr-1 h-30 mt-5 bg-gray-800 shadow-md shadow-black'>
			<img src={require(`../assets/productsImage/${ sku }-1-cart.webp`)} alt='shoppingImagen' className='w-20 h-full rounded-md' />
			<div className='flex-1 ml-2'>
				<p>{title}</p>
				<div>
					<p className='text-gray-400 text-sm'>
						{size} | {description}
					</p>
					<div className='flex justify-between items-center text-gray-400 text-sm mr-6'>
						<p >Quantity: {quantity}</p>
						<p className='text-yellow-600 text-lg'>$ {newCost}</p>
					</div>
				</div>
			</div>
			{
				isOpenModal && <ConfirmModal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} id={id} size={size} />
			}
			<div className='relative py-3 px-1'>
				<div className='absolute right-1 -top-3 px-1 font-semibold cursor-pointer text-black hover:text-gray-500' onClick={removeProductComplete}>X</div>
				<p className='text-yellow-500'>
					$ {price}
				</p>
				<div className='flex justify-end gap-1 mt-3'>
					<button className='flex justify-center items-center w-5 h-5 bg-black font-semibold' onClick={removeProductHandler}>-</button>
					<button className='flex justify-center items-center w-5 h-5 bg-black font-semibold' onClick={updateProductHandler}>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShoppingList;
