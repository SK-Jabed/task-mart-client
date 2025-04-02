import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import SignIn from "../Pages/SIgnIn/SignIn";
import FeaturedBoard from "../Pages/FeaturedBoard/FeaturedBoard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <FeaturedBoard />
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;