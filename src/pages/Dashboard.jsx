import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser } = useAuth();

  return currentUser ? (
    <div className="flex">
      <Sidebar />
      <div id="detail" className="flex-1 ml-80 text-center">
        <Outlet />
      </div>
    </div>
  ) : (
    <Link to="/login">Authorize in order to access content</Link>
  );
}
