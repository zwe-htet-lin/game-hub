import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/error";
import Game from "./pages/game";
import Home from "./pages/home";
import Layout from "./pages/layout";

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
