import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(
    ()=>{
      const user = localStorage.getItem('user');
     return user ? JSON.parse(user) : null;
    }
  )
const [token, setToken] = useState(() => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : null;
});

const [isAuthenticated, setIsAuthenticated] = useState(
  ()=> token ? true : false
)

const [authError, setAuthError] = useState(null)


const login = (userData,token) => {
  setUser(userData);
  setToken(token);
  setIsAuthenticated(true);
  // guardo en localstorage
  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('token', JSON.stringify(token));
  setAuthError(false);
}

const logout = () => {
  setUser(null);
  setToken(null);
  setIsAuthenticated(false);
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}

const value = {
  user,
  setUser,
  token,
  isAuthenticated,
  authError,
  setAuthError,
  login,
  logout
}

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
};