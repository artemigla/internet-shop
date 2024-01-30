import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
    <Outlet />
  </BrowserRouter>,
)
