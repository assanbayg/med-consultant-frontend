import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="text-center">
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
