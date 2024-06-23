import { createBrowserRouter } from "react-router-dom";

import { Home, Details } from "./routes";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "character/:characterId", element: <Details /> },
]);

export default Router;
