import { createContext, useContext,useState } from "react";
 
const UserContext = createContext(null);
 
function UserProvider({ children }) {
    const [user, setUser] = useState(null);
 
    function login() {
        setUser({ name : "Rohit", role: "Admin"   });
    }
 
    function logout() {
        setUser(null);
    }
 
    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
 
function useUser() {
    return useContext(UserContext);
}
export { UserProvider, useUser };