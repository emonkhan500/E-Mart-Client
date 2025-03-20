import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Authentication/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // user Create
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // googleLogin

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // user manage
  useEffect(()=>{
    const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
  console.log('inside ',currentUser)
  setUser(currentUser)
  setLoading(false)
      })
      return ()=>{
          unSubscribe()
      }
  },[])


  
  const authData = {
    createUser,
    user,
    loading,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
