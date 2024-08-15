import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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

  // Load chat messages for a specific chat ID
  const loadChatMessages = async (chatId) => {
    setLoading(true);
    setError(null);
    console.log(chatId);
    try {
      const dbRef = collection(
        db,
        `organizations/${currentUser.uid}/ai-chats/${chatId}/messages`,
      );
      const q = query(dbRef, orderBy("createdAt"));
      const querySnapshot = await getDocs(q);
      const messages = querySnapshot.docs.map((doc) => doc.data());
      return messages;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  // Send a new message to a specific chat ID
  const sendMessageFB = async (chatId, message, isUser) => {
    const dbRef = collection(
      db,
      `organizations/${currentUser.uid}/ai-chats/${chatId}/messages`,
    );
    const json = {
      text: message,
      isUser: isUser,
      createdAt: serverTimestamp(),
    };

    await addDoc(dbRef, json);
  };

  return {
    organization,
    loading,
    error,
    getOrganizationById,
    uploadOrganization,
    loadChatMessages,
    sendMessageFB,
  };
};

export default useOrganization;
