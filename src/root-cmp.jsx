import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.scss';
import { UserMsg } from './cmps/user-msg';
import { Login } from './views/login.jsx';
import { User } from './views/user';

export function App() {
  return (
    <section className='app main-layout'>
      <Routes>
        <Route path='/user' element={<User />} />
        <Route path='/' element={<Login />} />
      </Routes>
      <UserMsg />
    </section>
  )
}