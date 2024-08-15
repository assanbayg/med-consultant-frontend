import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";

import IndexComponent from "./components/IndexComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<IndexComponent />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="ai-chats/:chatId" element={<Chat />} />
        <Route path="real-chats/:chatId" element={<Chat />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
