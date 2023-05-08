import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/root';
import Home from './components/Home/Home';
import Sweepstakes from './components/Sweepstakes/Sweepstakes';
import ErrorPage from './ErrorPage';
import NoMatch from './components/NoMatch/NoMatch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'sweepstakes',
        element: <Sweepstakes />
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
