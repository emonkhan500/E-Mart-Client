import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const Values = { emon: 'emonkhan'};

  return (
  <AuthContext.Provider value={Values}>{children}
  </AuthContext.Provider>
  );
};

export default AuthProvider;
