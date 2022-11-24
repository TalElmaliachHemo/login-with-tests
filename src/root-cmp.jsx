import { Route, Routes } from 'react-router-dom';
import './assets/styles/main.scss';
import { Login } from './views/login.jsx';

export function App() {
  return (
    <section className='app main-layout'>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </section>
  )
}