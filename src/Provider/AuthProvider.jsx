import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Authentication/Firebase/firebase.config";
import useAxiosPublic from "../Axios/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  //  Helper: Request JWT from backend
  const getAndStoreToken = async (email) => {
    try {
      const res = await axiosPublic.post("/users/jwt", { email });
      if (res.data?.token) {
        localStorage.setItem("access-token", res.data.token);
        console.log(" Token stored:", res.data.token);
      }
    } catch (err) {
      console.error(" Failed to get token:", err);
    }
  };

  //  Signup
  const createUser = async (email, password) => {
    setLoading(true);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result;
  };

  //  Google login
  const googleLogin = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  };

  //  Login
  const login = async (email, password) => {
    setLoading(true);
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result;
  };

  //  Logout
  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("access-token");
    setUser(null);
  };

  //  Update profile
  const updateUser = (name, email) =>
    updateProfile(auth.currentUser, { displayName: name, email });

  //  Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log(" Logged in:", currentUser.email);
        setUser(currentUser);

        // Get token only once when user logs in
        if (!localStorage.getItem("access-token")) {
          await getAndStoreToken(currentUser.email);
        }
      } else {
        console.log(" Logged out");
        setUser(null);
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    createUser,
    googleLogin,
    login,
    logOut,
    updateUser,
  };

  if (loading) {
    return (
      <div className="w-24 h-24 mx-auto flex justify-center mt-10 items-center border-4 border-dashed  rounded-full animate-spin dark:border-primary-green"></div>
    );
  }

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
