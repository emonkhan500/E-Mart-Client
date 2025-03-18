import { createContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Authentication/Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth =getAuth(app)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(false)

// user Create
const createUser=(email,pass)=>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,pass)
}





  const authData = { 
    createUser,
    user,
    loading
  };

  return (
  <AuthContext.Provider value={authData}>{children}
  </AuthContext.Provider>
  );
};

export default AuthProvider;
