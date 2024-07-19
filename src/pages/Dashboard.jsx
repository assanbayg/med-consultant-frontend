import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

import Sidebar from "../components/common/Sidebar";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div className="flex">
      <Sidebar />
      <div id="detail" className="ml-80 flex-1 text-center">
        <Outlet />
      </div>
    </div>
  ) : (
    <Link to="/login">Authorize in order to access content</Link>
  );
}
