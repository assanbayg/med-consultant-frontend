import { AuthProvider } from "./contexts/AuthContext";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import IndexComponent from "./components/IndexComponent";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<IndexComponent />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="chats/:chatId" element={<Chat />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>,
);
