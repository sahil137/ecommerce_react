import React, { useEffect } from "react";
import Header from "../components/navigation/Header";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../features/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <Header />
      <div className="flex items-center justify-center">
        {/* All components replace the outlet */}
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
