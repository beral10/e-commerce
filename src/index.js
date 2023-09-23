import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';

import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<AppLayout>
					<App />
				</AppLayout>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
