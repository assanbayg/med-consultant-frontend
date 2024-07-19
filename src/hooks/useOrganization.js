import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useContext, useState } from "react";

import { AuthContext } from "../contexts/AuthContext";
import { db } from "../services/firebase";

const useOrganization = () => {
  const { currentUser } = useContext(AuthContext);
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // upload general info to db
  const uploadOrganization = async (org) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = doc(db, "organizations", currentUser.uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        await updateDoc(docRef, org);
      } else {
        await setDoc(docRef, org);
      }
      setLoading(false);
      return docRef.id;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  // retrieve organization by id
  const getOrganizationById = async (id = currentUser.uid) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = doc(db, "organizations", id);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        setOrganization(docSnapshot.data());
      } else {
        setError("No such document!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  return {
    organization,
    uploadOrganization,
    getOrganizationById,
    loading,
    error,
  };
};

export default useOrganization;
