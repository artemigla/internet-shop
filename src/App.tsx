import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/Main';
import { Error } from './pages/error/Error';
import { Cart } from './pages/cart/Cart';

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/internet-shop' element={<Main />} />
        <Route path='/internet-shop/cart' element={<Cart />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}