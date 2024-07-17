import { AuthProvider } from "./contexts/AuthContext";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import IndexComponent from "./components/IndexComponent";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <IndexComponent />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/chats/:chatId",
        element: <Chat />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Analytics />
  </React.StrictMode>,
);
