import ReactDOM from 'react-dom/client';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store.tsx';
import { App } from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Outlet />
    </BrowserRouter>
  </Provider>,
)
