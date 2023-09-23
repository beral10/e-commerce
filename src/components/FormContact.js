import React from 'react'
import dogBackground from '../assets/homePage/photo-form.jpg'
import FormCard from './FormCard'

const FormContact = () => {
  return (
	<div className='flex w-4/5 xl:w-3/4 lg:w-11/12 h-3/4 rounded-l-lg'>
		<div className='hidden lg:flex lg:w-8/12'>
			<img src={dogBackground} alt="bg-dog" className='rounded-l-lg' />
		</div>
		<div className='w-full overflow-auto'>
			<FormCard />
		</div>
	</div>
  )
}

export default FormContact