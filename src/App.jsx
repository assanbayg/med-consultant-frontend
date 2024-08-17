import AIChat from "./pages/AIChat";
import Dashboard from "./pages/Dashboard";
import EchoChat from "./pages/EchoChat";
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
        <Route path="ai-chats/:chatId" element={<AIChat />} />
        <Route path="echo-chats/:chatId" element={<EchoChat />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
