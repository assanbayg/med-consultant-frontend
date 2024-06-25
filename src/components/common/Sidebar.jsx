import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Sidebar() {
  const chats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ];
  const { logOut } = useAuth();

  return (
    <aside className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800">
      <div className="h-full px-5 py-5 overflow-y-auto ">
        <p className="text-2xl font-medium">Med Consultant</p>
        <nav>
          <ul className="space-y-4 font-medium">
            {chats.map((chat) => (
              <li key={chat.id}>
                <NavLink
                  to={`/chats/${chat.id}`}
                  className={({ isActive }) =>
                    isActive
                      ? "block p-2 rounded-lg bg-indigo-500 text-white shadow-md hover:text-white"
                      : "block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                >
                  {chat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="fixed bottom-0 dark:bg-gray-700 p-4 w-full bg-gray-200 flex justify-between">
        <button className="primary-btn " onClick={logOut}>
          Log Out
        </button>
        <Link
          to={"/profile"}
          className="rounded-full w-10 h-10 bg-indigo-400 hover:bg-indigo-500"
        ></Link>
      </div>
    </aside>
  );
}
