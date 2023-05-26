import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";

function App() {
  const router = createBrowserRouter(routes, {
    basename: `/`,
  });
  return <RouterProvider router={router} />;
}

export default App;
