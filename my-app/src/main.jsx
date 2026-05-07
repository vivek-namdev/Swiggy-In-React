import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import App from "./App.jsx";
import Food from "./pages/Food";
import Instamart from "./pages/Instamart";
import Dineout from "./pages/Dineout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/food",
    element: <Food />,
  },
  {
    path: "/instamart",
    element: <Instamart />,
  },
  {
    path: "/dineout",
    element: <Dineout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);