import { useEffect, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";

import { useAuth } from "../../hooks/useAuth";

export const ProfilePicture = () => {
  const { currentUser } = useAuth();

  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    const url = currentUser.photoURL;
    setPhotoUrl(url);
  }, [currentUser.photoURL]);

  return photoUrl ? (
    <img
      className="rounded-full hover:brightness-75"
      width={40}
      height={40}
      src={photoUrl}
    />
  ) : (
    <IoPersonCircle className="" size={40} />
  );
};
