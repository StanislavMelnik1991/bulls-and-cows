import { Route, Routes } from 'react-router-dom';
import { Game } from '../components/Game';
import { Login } from '../components/Login';
import { Main } from '../components/Main';
import { Registration } from '../components/Registration';

export const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/signUp' element={<Registration />} />
    <Route path='/signIn' element={<Login />} />
    <Route path='/game' element={<Game />} />
  </Routes>
  );
};
