import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/about.tsx';
import Settings from './pages/Settings/settings.tsx';
import MainPage from './pages/MainPage/mainpage.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />
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
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
