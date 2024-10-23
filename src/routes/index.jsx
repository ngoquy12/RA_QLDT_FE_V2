import { createBrowserRouter, Navigate } from "react-router-dom";
// import eLearningRoutes from "./eLearning";
// import interviewRoutes from "./interview";
// import testInputRoutes from "./testInput";
// import trainingManagerRoutes from "./trainingManager";
// import internshipRoutes from "./internship";
import DefaultLayout from "../layouts/DefaultLayout";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import NotFound from "@/pages/page404";
import ErrorPage from "@/pages/page500";
import ForbiddenPage from "@/pages/page403";
import EmployeeManager from "@/pages/trainingManager/employeeManager";

// const routes = [
//   ...eLearningRoutes,
//   ...internshipRoutes,
//   ...interviewRoutes,
//   ...testInputRoutes,
//   ...trainingManagerRoutes,
// ];

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "employee",
        element: <EmployeeManager />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "500",
        element: <ErrorPage />,
      },
      {
        path: "403",
        element: <ForbiddenPage />,
      },
    ],
  },
]);

export default router;
