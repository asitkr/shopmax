import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import About from './pages/About';
import ThankYou from './pages/ThankYou';
import Checkout from './pages/Checkout';
import Shop from './pages/Shop';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import SingleProduct from './pages/SingleProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/product",
    element: <Layout><Shop /></Layout>,
  },
  {
    path: "/product/:id",
    element: <Layout><SingleProduct /></Layout>,
  },
  {
    path: "/cart",
    element: <Layout><Cart /></Layout>,
  },
  {
    path: "/contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/about",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/checkout",
    element: <Layout><Checkout /></Layout>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/thankyou",
    element: <Layout><ThankYou /></Layout>,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
