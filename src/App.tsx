import About from "./pages/About";
import Landing from "./pages/landingPage";
import Care from "./pages/Care";
import Process from "./pages/Process";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Trust from "./pages/Trust";
import Gallery from "./components/section/Gallery";
import { HeroSmall } from "./components/section/HeroSmall";
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
      path: "gallery",
      element: <Gallery />,
    },

    {
      path: "/process",
      element: <Process />,
    },

    {
      path: "/Small",
      element: <HeroSmall />,
    },
  ]);

  return <RouterProvider router={router} />;
}
