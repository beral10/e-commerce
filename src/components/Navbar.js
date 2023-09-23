import React, { useState } from 'react';
import logo from '../assets/logo/logo.jpg';
import { NavLink } from 'react-router-dom';
import cart from '../assets/icons/shopping_cart.svg';
import { useSelector } from 'react-redux';

const Navbar = ({setIsShowCart, isShowCart}) => {

	const productSelector = useSelector((state) => state.shopingcard.productState);

	const [isOpen, setIsOpen] = useState(false);

	const handlerOpenMenu = () => {
		setIsOpen(!isOpen);
	};

	const handlerCloseMenu = () => {
		setIsOpen(false);
	};

	const handlerOpenCart = () => {
		setIsOpen(false);
		setIsShowCart(!isShowCart);
	}

	return (
		<header className='flex justify-between item sm:gap-2 px-5 sm:px-3 py-4 lg:px-10'>
			{/* logo de la marca */}
			<div className='w-40 sm:w-52 lg:w-96 flex flex-col items-center justify-center'>
				<img src={logo} alt='logo' />
				<p className='inline-block font-medium font-WorkSans text-yellow-600 text-sm'>The fascinating thing about fashion!</p>
			</div>

			{/* Links de navegación mobile */}
			<div className='relative flex justify-center items-center'>
				<div className='flex flex-col gap-2 sm:hidden cursor-pointer group z-20' onClick={handlerOpenMenu}>
					<div className={`bg-yellow-600 w-10 h-1 ${isOpen ? 'translate-y-2 rotate-45 transition duration-300 ease-in-out' : ''}`}></div>
					<div className={`bg-yellow-600 w-10 h-1 ${isOpen ? 'opacity-0 transition duration-300 ease-in-out' : ''}`}></div>
					<div className={`bg-yellow-600 w-10 h-1 ${isOpen ? '-translate-y-4 -rotate-45 transition duration-300 ease-in-out' : ''}`}></div>
				</div>
				{isOpen && (
					<nav className='absolute flex justify-center items-center bg-black -left-100 -top-4 -right-5 bottom-0 w-screen h-screen sm:hidden z-10 text-white'>
						<ul className='flex flex-col items-center gap-4 w-full'>
							<NavLink to={'/'} onClick={handlerCloseMenu}>Home</NavLink>
							<NavLink to={'/products'} onClick={handlerCloseMenu}>Products</NavLink>
							<NavLink to={'/contact'} onClick={handlerCloseMenu}>Contact us</NavLink>
							<NavLink>
								<button className='flex gap-2 justify-center items-center' onClick={handlerOpenCart}>
									<div className='flex items-end bg-black p-1'>
										<img src={cart} alt='cart' className='w-10' />
										<span className='flex justify-center items-center w-5 h-5 rounded-full bg-yellow-500 text-black text-xs font-semibold'>{productSelector.length}</span>
									</div>
								</button>
							</NavLink>						
						</ul>
					</nav>
				)}
			</div>

			{/* links de navegación desktop */}
			<nav className='hidden sm:flex flex-1'>
				<ul className='flex justify-between items-center w-full'>
					<NavLink to={'/'}>Home</NavLink>
					<NavLink to={'/products'}>Products</NavLink>
					<NavLink to={'/contact'}>Contact us</NavLink>
					<NavLink>
						<button className='flex gap-2 justify-center items-center' onClick={handlerOpenCart}>
							<div className='flex items-end bg-black p-1 mr-10 lg:mr-0'>
								<img src={cart} alt='cart' className='w-10' />
								<span className='flex justify-center items-center w-5 h-5 rounded-full bg-yellow-500 text-black text-xs font-semibold'>{productSelector.length}</span>
							</div>
							<p className='hidden lg:flex'>Shopping cart</p>
						</button>
					</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
