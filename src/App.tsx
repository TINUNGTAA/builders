import About from "./components/pages/About";
import Landing from "./components/pages/landingPage";
import Care from "./components/pages/Care";
import Process from "./components/pages/Process";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trust from "./components/pages/Trust";
import Gallery from "./components/section/Gallery";
import  {HeroSmall}  from "./components/section/HeroSmall";
import Contact from "./components/pages/Contact-Us";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      
    },

    {
      path: "/about",
      element: <About />,
     
    },

    {
      path: "/customer-care",
      element: <Care />,
     
    },

    {
      path: "/trust-us",
      element: <Trust />,
     
    },
    {
      path: "/contact-us",
      element: <Contact />,
     
    },

   

   
    {
      path: "gallery",
      element: <Gallery />,
     
    },

    {
      path: "/process",
      element: <Process />,
    },

    {
      path: "/Small",
      element:< HeroSmall />,
    },

   
  ]);

  return <RouterProvider router={router} />;
 
}
