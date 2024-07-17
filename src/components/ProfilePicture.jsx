import { useEffect, useState } from "react";

import useAuth from "../hooks/useAuth";

export const ProfilePicture = () => {
  const { getPhotoUrl } = useAuth();

  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    const url = getPhotoUrl();
    setPhotoUrl(url);
  }, [getPhotoUrl]);

  return photoUrl ? (
    <img className="rounded-full" width={40} height={40} src={photoUrl} />
  ) : (
    <div className="h-10 w-10 rounded-full bg-indigo-400 hover:bg-indigo-500"></div>
  );
};
