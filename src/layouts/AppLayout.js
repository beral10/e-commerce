import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ShoppingCart } from '../views/ShoppingCart';
import NotificationCard from '../components/NotificationCard';

const AppLayout = ({ children }) => {
	const [isShowCart, setIsShowCart] = useState(false);
	
	

	return (
		<div className='relative max-w-screen-xl h-screen m-auto flex flex-col'>
			<Navbar setIsShowCart={setIsShowCart} isShowCart={isShowCart} />			
			<ShoppingCart setIsShowCart={setIsShowCart} isShowCart={isShowCart} />			
			<NotificationCard />
			{children}
		</div>
	);
};

export default AppLayout;
