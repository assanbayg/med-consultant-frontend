import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import { useAuth } from "../contexts/AuthContext";

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
