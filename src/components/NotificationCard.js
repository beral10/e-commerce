import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notificationActions } from '../store/slices';
import iconAlert from '../assets/icons/warning_notification.svg';
import iconTrash from '../assets/icons/delete-icon.svg';
import iconCheck from '../assets/icons/done_check.svg';

const NotificationCard = () => {
	const dispatch = useDispatch();
	const { type, message } = useSelector((state) => state.notification);
	const [toggle, setToggle] = useState(0)


	const timeOut = (ms) => {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	const hideHandler = async() => {
		await timeOut(2000) //time on screen

		setToggle(2) //animation

		await timeOut(1000)

		dispatch(notificationActions.hideNotification()); //Remove the component
	}

	useEffect(() => {
		if(type) {
			setToggle(1)
			hideHandler()
		}
	}, [type])

	/* useEffect(() => {
		let hideTimeout;
		setToggle(true)
		if (type) {
			hideTimeout = setTimeout(() => {
				dispatch(notificationActions.hideNotification());
			}, 2000);
		}

		return () => {
			clearTimeout(hideTimeout);
		};
	}, [type, dispatch]);

	if (!type) {
		return null;
	} */
	
	return (
		type && (<div className={`absolute md:w-80 md:h-22 bottom-0 right-0 mr-3 md:mr-10 mb-20 md:mb-10 z-50`}>
		<div className={`flex items-center gap-4 opacity-0 ${type === 'alert' ? 'bg-yellow-300' : '' || type === 'success' ? 'bg-green-300' : '' || type === 'delete' ? 'bg-red-600' : ''} py-2 px-3 rounded-md ${ toggle === 1 && 'transition-all opacity-100 duration-400' } ${ toggle === 2 && 'transition-all opacity-0 duration-700' }`}>
			{
				type === 'alert' ? <img src={iconAlert} alt='alerta' className='w-7 h-7' /> : null || type === 'success' ? <img src={iconCheck} alt='agregado' className='w-7 h-7' /> 	: null || type === 'delete' ? <img src={iconTrash} alt='eliminado' className='w-7 h-7' /> : null
			}
			<p>{message}</p>
		</div>
	</div>)
	)
};

export default NotificationCard;
