import React from 'react';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Root from './routes/root';
import Home from "./routes/Home/Home";
import Sweepstakes from "./routes/Sweepstakes/Sweepstakes";
import ErrorPage from "./ErrorPage";
import NoMatch from "./routes/NoMatch/NoMatch";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'sweepstakes',
                element: <Sweepstakes/>
            },
            {
                path: '*',
                element: <NoMatch/>
            }
        ]
    }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App;
