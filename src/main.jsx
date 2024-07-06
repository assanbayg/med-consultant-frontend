import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import IndexComponent from "./components/IndexComponent";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import ProfilePage from "./pages/ProfilePage";
import Chat from "./pages/Chat";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./contexts/AuthContext";
import { Analytics } from "@vercel/analytics/react";

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
