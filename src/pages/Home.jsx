import React, { useEffect } from "react";
import Header from "../components/navigation/Header";
import { Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../redux/features/userSlice.js";
import userService from "../api/services/userService.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        userService
          .getCurrentUser()
          .then((res) => {
            const { user } = res;
            dispatch(
              setUser({
                id: user._id,
                email: user.email,
                displayName: user.displayName,
                name: user.name,
              })
            );
          })
          .catch((error) => {
            console.log(`error in getting user details: ${error}`);
          });
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
