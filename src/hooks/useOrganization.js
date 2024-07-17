import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";

const useOrganization = () => {
  const [organization, setOrganization] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // upload general info to db
  const uploadOrganization = async (org) => {
    setLoading(true);
    setError(null);
    try {
      const docRef = await addDoc(collection(db, "organizations"), org);
      setLoading(false);
      return docRef.id;
    } catch (error) {
      alert(error.message);
      alert(error);
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  // retrieve organization by id
  const getOrganizationById = async (id) => {
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
