import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import SubmitRequest from "../pages/SubmitRequest/SubmitRequest";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/submit-request",
        element: <SubmitRequest />,
      },
    ],
  }
]);

export default router;
