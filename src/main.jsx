import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArtistPage from './Pages/ArtistPage'
// import MusicPage from './Pages/MusicPage'
import MarketPlace from './Pages/MarketPlace'
import SocialGood from './Pages/SocialGood'
import './Styles/App.css';
import ArtDashboard from './Pages/ArtDashboard'
import UploadNFT from './Pages/UploadNFT'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'artist',
        element: <ArtistPage />,
    },
    {
        path: 'marketplace',
        element: <MarketPlace />,
    },
    {
        path: 'socialgood',
        element: <SocialGood />,
    },
    {
        path: 'artdash',
        element: <ArtDashboard />,
    },
    {
        path: 'uploadnft',
        element: <UploadNFT />,
    },

]);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <RouterProvider router={router} />
);