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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/shop",
    element: <Layout><Shop /></Layout>,
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
    <RouterProvider router={router} />
  );
}

export default App;
