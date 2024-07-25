import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './main.scss';
import About from './pages/About/about.tsx';
import Settings from './pages/Settings/settings.tsx';
import MainPage from './pages/MainPage/mainpage.tsx';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.ts';
import { StyledEngineProvider } from '@mui/material';
import { PersistGate } from 'redux-persist/integration/react';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}></PersistGate>
				<RouterProvider router={router} />
			</Provider>
		</StyledEngineProvider>
	</React.StrictMode>
);
