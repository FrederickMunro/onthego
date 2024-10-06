import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './main.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
