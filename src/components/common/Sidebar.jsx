import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
/* TODO:
 - load chats from server
 - locally store chats (?)
 */

export default function Sidebar() {
  const chats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ];
  const { logOut } = useAuth();

  return (
    <aside className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 dark:bg-gray-800">
      <div className="h-full px-5 py-5 overflow-y-auto ">
        <div className="flex justify-between">
          <p className="text-2xl font-medium">Med Consultant</p>
          <Link
            to={"/profile"}
            className="rounded-full w-10 h-10 bg-indigo-400 hover:bg-indigo-500"
          ></Link>
        </div>
        {/* 
        search is unnecessary for now
        */}
        {/* <div className="flex py-2 space-x-2">
          <form role="search" className="flex-grow">
            <input
              type="search"
              name="query"
              placeholder="Search"
              className="w-full px-4 py-2 border outline-none border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            />
          </form>
          <form method="post">
            <button type="submit" className="primary-btn">
              New
            </button>
          </form>
        </div> */}
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
      <div className="fixed bottom-0 dark:bg-gray-700 p-4 w-full bg-gray-200">
        <button className="primary-btn " onClick={logOut}>
          Log Out
        </button>
      </div>
    </aside>
  );
}
