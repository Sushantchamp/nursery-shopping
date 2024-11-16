import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout';
import { Home, Cart, Productlist } from './components';
import store from './store/store';
import { Provider } from 'react-redux';
import Products from './datas/items'

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route element={<Layout />}>
        <Route path='products' element={<Productlist productsProp={Products} />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  </StrictMode>
);


