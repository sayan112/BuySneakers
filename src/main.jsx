import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 import Login from './Login/Login';
  import Signup from './Signup/Signup';
import './index.css'
import {Provider} from "react-redux"
import Store from './app/Store.js'
 import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/",
  //   element: <Login />,
  // },
  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
