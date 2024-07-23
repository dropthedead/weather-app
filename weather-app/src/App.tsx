import { Link, Outlet } from 'react-router-dom';

import './App.scss';
function App() {
  return (
    <>
      <header>
        <h1>Weather App</h1>

        <Link to='/'>Главная</Link>

        <Link to='/about'>Обо мне</Link>

        <Link to='/settings'>Настройки</Link>
      </header>
   
      <Outlet />
    </>
  );
}

export default App;
