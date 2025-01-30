import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Error from "./pages/error";
import Home from "./pages/home";
import Game from "./pages/game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:slug", element: <Game /> },
    ],
  },
]);

export default router;
