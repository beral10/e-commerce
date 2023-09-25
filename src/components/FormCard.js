import { Field, Form } from 'react-final-form';
import InputDragAndDrop from './InputDragAndDrop';

const FormCard = () => {
	const initialValues = {
		//firstName: 'Liam',
		//lastName: 'Johnson',
		//email: 'ana20perez@gmail.com',
	};

	/* const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const onSubmit = async (values) => {
		await sleep(300);
		window.alert(JSON.stringify(values, 0, 2));
	}; */

	const onSubmit = (values, form) => {
		console.log(values);
		form.reset();
	};

	const validate = (values) => {
		const errors = {};

		if (!values.firstName) {
			errors.firstName = 'This field is required.';
		}

		if (!values.lastName) {
			errors.lastName = 'This field is required.';
		}

		if (!values.email) {
			errors.email = 'This field is required';
		} else {
			const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
			if (!emailRegex.test(values.email)) {
				errors.email = 'Enter a valid email address';
			}
		}

		if (values.password && values.password.length < 8) {
			errors.password = 'It must contain a minimum of 8 characters.';
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Password confirmation is required';
		}

		if (values.password !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}

		return errors; 
	};

		return (
		<Form
			onSubmit={onSubmit}
			validate={validate}
			initialValues={initialValues}
			render={({ handleSubmit, submitting, pristine }) => (
				<form onSubmit={handleSubmit} className='w-full bg-white p-4 rounded-lg lg:rounded-l-none'>
					<h2 className='text-center font-medium text-xl p-4'>Create an Account!</h2>
					<div className='inputs md:flex-row'>
						<div className='inside-input md:w-1/2'>
							<label className='label'>First Name</label>
							<Field
								name='firstName'
								render={({ input, meta }) => (
									<div>
										<input 
											{...input} 
											className={`field w-full`} 
											placeholder='First name' 
										/>
										{meta.touched && meta.error && <div className='text-orange-600'>{meta.error}</div>}
									</div>
								)}
							/>
						</div>

						<div className='inside-input md:w-1/2'>
							<label className='label'>Last Name</label>
							<Field
								name='lastName'
								render={({ input, meta }) => (
									<div>
										<input 
											{...input} 
											className='field w-full' 
											placeholder='Last name'
										/>
										{meta.touched && meta.error && <div className='text-orange-600'>{meta.error}</div>}
									</div>
								)}
							/>
						</div>
					</div>
					<div className='inside-input my-4'>
						<label className='label'>Email</label>
						<Field name='email' className='field'>
							{({ input, meta }) => (
								<div>
									<input type='email' {...input} className='field w-full' placeholder='e-mail' />
									{(meta.touched && meta.error === 'This field is required') ? <div className='text-orange-600'>{meta.error}</div> : <div className='text-red-700'>{meta.error}</div>}
								</div>
							)}
						</Field>
					</div>
					<div className='inputs md:flex-row'>
						<div className='inside-input md:w-1/2'>
							<label className='label'>Password</label>
							<Field name='password'>
								{({ input, meta }) => (
									<div>
										<input type='password' {...input} placeholder='**********' className='field w-full' />
										{meta.touched && meta.error && <div className='text-red-700'>{meta.error}</div>}
									</div>
								)}
							</Field>
						</div>
						<div className='inside-input md:w-1/2'>
							<label className='label'>Confirm Password</label>
							<Field name='confirmPassword'>
								{({ input, meta }) => (
									<div>
										<input type='password' {...input} placeholder='**********' className='field w-full' />
										{(meta.touched && meta.error === 'Passwords do not match') ? <div className='text-red-700'>{meta.error}</div> : <div className='text-orange-600'>{meta.error}</div>}
									</div>
								)}
							</Field>
						</div>
					</div>
					<div className='inside-input my-4'>
						<label className='label'>Upload document</label>
						<Field name='uploadDocument'>
							{
								({ input }) => <InputDragAndDrop filedocs={(filedocs) => {
								input.onChange(filedocs)
								}} />
							}
						</Field>
					</div>
					<button type='submit' disabled={submitting || pristine} className='button w-full mt-4'>
						Register Account
					</button>

					<hr className='h-1 bg-gray-400 rounded-full my-8' />

					<div className='text-center'>
						<a className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800' href='#'>
							Forgot Password?
						</a>
					</div>
					<div className='text-center'>
						<a className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800' href='#'>
							Already have an account? Login!
						</a>
					</div>
				</form>
			)}
		/>
	);
};

export default FormCard;
