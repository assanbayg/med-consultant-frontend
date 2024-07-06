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
    <div className="rounded-full w-10 h-10 bg-indigo-400 hover:bg-indigo-500"></div>
  );
};
