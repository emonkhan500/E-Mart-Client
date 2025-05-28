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
import Swal from "sweetalert2";

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

  // update user
  const updateUser =(name,email)=>updateProfile(auth.currentUser,{
    displayName:name, email:email 
  })
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
  
  
  // login
  const login=(email,pass)=>{
    setLoading(true);
   return signInWithEmailAndPassword(auth,email,pass)
  }
  // logout
  const logOut=()=>{
   return signOut(auth)
    
  }
  
  const authData = {
    createUser,
    user,
    loading,
    googleLogin,
    login,
    logOut,
    updateUser
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
