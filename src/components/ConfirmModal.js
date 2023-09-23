import React from 'react';
import { useDispatch } from 'react-redux';
import { notificationActions, shopingCardActions } from '../store/slices';

const ConfirmModal = ({ setIsOpenModal, isOpenModal, size, id }) => {
	const dispatch = useDispatch();

	const confirmRemoveItem = () => {
		dispatch(shopingCardActions.removeProductComplete({size, id}));
    	setIsOpenModal(!isOpenModal);
		dispatch(notificationActions.showNotification({
			type: 'delete',
			message: 'The article has been removed!',
		}))
	};

	return (
		<div className='absolute right-0 top-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm z-50'>
			<div className='flex flex-col justify-center items-center gap-3 max-w-lg h-32 rounded-md bg-gray-400 px-5 border border-gray-500'>
				<p>You will delete the product, do you want to continue?</p>
				<div className='flex justify-between items-center gap-2 w-full'>
					<button className='w-full px-4 py-1 rounded-md font-semibold bg-sky-700 hover:bg-sky-600' onClick={confirmRemoveItem}>
						Confirm
					</button>
					<button className='w-full px-4 py-1 rounded-md font-semibold bg-red-700 hover:bg-red-600' onClick={() => setIsOpenModal(!isOpenModal)}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
