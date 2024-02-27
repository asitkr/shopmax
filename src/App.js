import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
