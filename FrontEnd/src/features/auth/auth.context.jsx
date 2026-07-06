import { createContext,useState } from "react";
import { useEffect } from "react";

export const AuthContext= createContext()

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    let [msg,setMsg]=useState("");
    let [loading,setLoading]=useState(false);

     useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);


    return (
        <AuthContext.Provider value={{user,setUser,msg,setMsg,loading,setLoading}} >
            {children}
        </AuthContext.Provider>
    )

}