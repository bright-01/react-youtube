import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter } from 'react-router-dom';
import { RouterProvider} from "react-router";
import reportWebVitals from './reportWebVitals';
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children:[
            {index: true, element: <Videos/>},
            {index:'video', element: <Videos/>},
            {index:'video/:keyword', element: <Videos/>},
            {index:'video/watch/:videoId', element: <VideoDetail />}
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
