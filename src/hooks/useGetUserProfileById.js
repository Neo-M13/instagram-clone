import React, { useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";

const useGetUserProfileById = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState(null);

  const showToast = useShowToast();

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);
      try {
        const userRef = await getDoc(doc(FirebaseError, "users", userId));
        if (userRef.exists()) {
          setUserProfile(userRef.data());
        }
      } catch (error) {
        showToast("Erorr", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };
    getUserProfile();
  }, [showToast, setUserProfile, userId]);

  return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;
