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
  const [role, setRole] = useState(null); 
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // 🔹 Get JWT
  const getAndStoreToken = async (email) => {
    try {
      const res = await axiosPublic.post("/users/jwt", { email });
      if (res.data?.token) {
        localStorage.setItem("access-token", res.data.token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Get Role
  const getUserRole = async (email) => {
    try {
      const res = await axiosPublic.get(`/users/role/${email}`);
      setRole(res.data?.role || "user");
    } catch (err) {
      console.error("Role fetch error:", err);
      setRole("user");
    }
  };

  // 🔹 Signup
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // 🔹 Login
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 🔹 Logout
  const logOut = async () => {
    await signOut(auth);
    localStorage.removeItem("access-token");
    setUser(null);
    setRole(null);
  };

  // 🔹 Update Profile
  const updateUser = (name) =>
    updateProfile(auth.currentUser, { displayName: name });

  // 🔹 Auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        await getAndStoreToken(currentUser.email);
        await getUserRole(currentUser.email);
      } else {
        setUser(null);
        setRole(null);
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    role,
    loading,
    createUser,
    googleLogin,
    login,
    logOut,
    updateUser,
  };

  if (loading) {
    return (
      <div className="w-24 h-24 mx-auto flex justify-center mt-10 items-center border-4 border-dashed rounded-full animate-spin border-primary-green"></div>
    );
  }

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;