import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { loader as rootLoader }  from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newpost, { action as actionPost} from './components/Newpost.jsx';
import Root from './routes/root.jsx';
import PostDetails, {loader as idLoader} from './components/PostDetailes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: rootLoader,
        children: [
          {
            path: "/Newpost",
            element: <Newpost />,
            action: actionPost,
          },
          {
            path: '/:id',
            element: <PostDetails />,
            loader: idLoader,
          },
        ]
      },
    ]
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
