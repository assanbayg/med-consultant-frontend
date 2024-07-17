import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../services/firebase";

export default function useAuth() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const signUp = async (email, password) => {
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const logIn = async (email, password) => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const logOut = async () => {
    setError(null);
    try {
      await signOut(auth);
    } catch (error) {
      setError(error.message);
    }
  };

  const authenticateWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const getPhotoUrl = () => {
    return auth.currentUser.photoURL;
  };

  const getUserId = () => {
    return auth.currentUser.getIdToken;
  };

  return {
    signUp,
    logIn,
    logOut,
    error,
    authenticateWithGoogle,
    getPhotoUrl,
    getUserId,
  };
}
