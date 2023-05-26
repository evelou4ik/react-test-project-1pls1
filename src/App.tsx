import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './components/root';
import Home from './components/Home/Home';
import Sweepstakes from './components/Sweepstakes/Sweepstakes';
import Settings from './components/Settings/Settings';
import ErrorPage from './ErrorPage';
import NoMatch from './components/NoMatch/NoMatch';
import Branding from './components/Settings/Branding/Branding';
import Colors from './components/Settings/Colors/Colors';
import Typography from './components/Settings/Typography/Typography';

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
        path: `sweepstakes`,
        element: <Sweepstakes />
      },
      {
        path: '*',
        element: <NoMatch />
      },
      {
        path: 'settings',
        element: <Settings />,
        children: [
          {
            path: 'branding',
            element: <Branding />
          },
          {
            path: 'colors',
            element: <Colors />
          },
          {
            path: 'typography',
            element: <Typography />
          }
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
