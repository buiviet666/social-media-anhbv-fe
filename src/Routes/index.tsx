import About from '../pages/About';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import LayoutCommon from '../pages/layout';
import Profile from '../pages/Profile';

export const RoutesCustom = [
  {
    path: '/',
    element: <LayoutCommon />,
    errorElement: <Error404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
];
