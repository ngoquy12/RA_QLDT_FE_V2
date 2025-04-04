import React, { Suspense } from "react";
import { Spin } from "antd";
import { createBrowserRouter, Navigate } from "react-router-dom";
// import eLearningRoutes from "./eLearning";
// import interviewRoutes from "./interview";
// import testInputRoutes from "./testInput";
// import trainingManagerRoutes from "./trainingManager";
// import internshipRoutes from "./internship";

const DefaultLayout = React.lazy(() => import("@/layouts/DefaultLayout"));
const Dashboard = React.lazy(() => import("@/pages/dashboard"));
const NotFound = React.lazy(() => import("@/pages/page404"));
const ErrorPage = React.lazy(() => import("@/pages/page500"));
const ForbiddenPage = React.lazy(() => import("@/pages/page403"));
const EmployeeManager = React.lazy(() =>
  import("@/pages/trainingManager/employeeManager")
);
const Login = React.lazy(() => import("@/pages/login"));
const MessengerLayout = React.lazy(() =>
  import("@/pages/messenger/MessengerLayout")
);
const TraningSystem = React.lazy(() =>
  import("@/pages/trainingManager/trainingSystem")
);
const TopicManager = React.lazy(() =>
  import("@/pages/internship/topicManager")
);
const ProjectDashboard = React.lazy(() =>
  import("@/pages/internship/projectDashboard")
);
const ProjectManager = React.lazy(() =>
  import("@/pages/internship/projectManager")
);

// const routes = [
//   ...eLearningRoutes,
//   ...internshipRoutes,
//   ...interviewRoutes,
//   ...testInputRoutes,
//   ...trainingManagerRoutes,
// ];

const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;

const LazyLoader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(255,255,255,0.05)]">
          <Spin tip="Đang tải..." size="large">
            {content}
          </Spin>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <LazyLoader>
        <DefaultLayout />
      </LazyLoader>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <LazyLoader children={<Dashboard />} />,
      },
      {
        path: "employee-manager",
        element: <LazyLoader children={<EmployeeManager />} />,
      },
      {
        path: "training-system",
        element: <LazyLoader children={<TraningSystem />} />,
      },
      {
        path: "internship/report",
        element: <LazyLoader children={<ProjectDashboard />} />,
      },
      {
        path: "internship/topic-manager",
        element: <LazyLoader children={<TopicManager />} />,
      },
      {
        path: "internship/project-manager",
        element: <LazyLoader children={<ProjectManager />} />,
      },
      {
        path: "*",
        element: <LazyLoader children={<NotFound />} />,
      },
      {
        path: "500",
        element: <LazyLoader children={<ErrorPage />} />,
      },
      {
        path: "403",
        element: <LazyLoader children={<ForbiddenPage />} />,
      },
      {
        path: "messenger",
        element: <LazyLoader children={<MessengerLayout />} />,
      },
    ],
  },
]);

export default router;
