import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RoutesCustom } from './Routes';

const router = createBrowserRouter(RoutesCustom);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
