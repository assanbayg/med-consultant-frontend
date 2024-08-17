import { ProfilePicture } from "./ProfilePicture";
import { useEffect, useRef, useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

const [minWidth, maxWidth, defaultWidth] = [192, 384, 256];

export default function Sidebar() {
  const [width, setWidth] = useState(
    parseInt(localStorage.getItem("sidebarWidth")) || defaultWidth,
  );
  const isResized = useRef(false);
  const { logOut } = useAuth();

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResized.current) return;

      setWidth((prevWidth) => {
        const newWidth = prevWidth + e.movementX / 2;
        return Math.min(maxWidth, Math.max(minWidth, newWidth));
      });
    };

    const handleMouseUp = () => {
      isResized.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarWidth", width);
  }, [width]);

  const aiChats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
  ];

  const echoChats = [
    { id: 1, name: "Echo Chat 1" },
    { id: 2, name: "Echo Chat 2" },
  ];

  return (
    <aside
      style={{ width: `${width / 16}rem` }}
      className="fixed left-0 top-0 z-40 h-screen -translate-x-full bg-gray-50 transition-transform sm:translate-x-0 dark:bg-gray-800"
    >
      <div className="h-full overflow-y-auto px-5 py-5">
        <p className="mb-2 text-2xl font-medium">Med Consultant</p>
        <ChatSection title="AI Chats" chats={aiChats} />
        <div className="h-1 w-full bg-gray-200 my-4"></div>
        <ChatSection title="Echo Chats" chats={echoChats} />
      </div>

      <ResizeHandle isResized={isResized} />

      <SidebarFooter logOut={logOut} />
    </aside>
  );
}

function ChatSection({ title, chats }) {
  return (
    <nav>
      <p className="mb-2 text-xl">{title}</p>
      <ul className="space-y-4 font-medium">
        {chats.map((chat) => (
          <li key={chat.id}>
            <NavLink
              to={`/${title.toLowerCase().replace(" ", "-")}/${chat.id}`}
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
  );
}

function ResizeHandle({ isResized }) {
  return (
    <div
      className="absolute top-0 right-0 h-full w-2 cursor-ew-resize"
      onMouseDown={() => {
        isResized.current = true;
      }}
    />
  );
}

function SidebarFooter({ logOut }) {
  return (
    <div className="fixed bottom-0 flex w-full justify-between items-center bg-gray-200 p-4 dark:bg-gray-700">
      <button className="primary-btn" onClick={logOut}>
        <IoExitOutline size={24} />
      </button>
      <Link to="/profile">
        <ProfilePicture />
      </Link>
    </div>
  );
}
