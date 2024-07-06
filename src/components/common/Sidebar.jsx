import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { ProfilePicture } from "../ProfilePicture";

export default function Sidebar() {
  const chats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ];
  const { logOut } = useAuth();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-80 -translate-x-full bg-gray-50 transition-transform sm:translate-x-0 dark:bg-gray-800">
      <div className="h-full overflow-y-auto px-5 py-5">
        <p className="mb-2 text-2xl font-medium">Med Consultant</p>
        <nav>
          <ul className="space-y-4 font-medium">
            {chats.map((chat) => (
              <li key={chat.id}>
                <NavLink
                  to={`/chats/${chat.id}`}
                  className={({ isActive }) =>
                    isActive
                      ? "block rounded-lg bg-indigo-500 p-2 text-white shadow-md hover:text-white"
                      : "block rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                >
                  {chat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="fixed bottom-0 flex w-full justify-between bg-gray-200 p-4 dark:bg-gray-700">
        <button className="primary-btn" onClick={logOut}>
          Log Out
        </button>
        <Link to={"/profile"}>
          <ProfilePicture />
        </Link>
      </div>
    </aside>
  );
}
