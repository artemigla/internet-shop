import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/Main';

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/internet-shop' element={<Main />} />
      </Routes>
    </>
  )
}