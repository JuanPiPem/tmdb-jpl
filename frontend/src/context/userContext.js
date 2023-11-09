import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export function UserProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", { withCredentials: true })
      .then((result) => result.data)
      .then((userData) => {
        if (userData) setUser(userData);
      });
  }, []);
  console.log("BOOOOCAAAAAA", user);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserContext;
