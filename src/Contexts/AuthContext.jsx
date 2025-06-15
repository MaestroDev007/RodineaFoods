import React, {useContext, createContext, useState, useEffect} from "react"
import { auth } from "../Config/firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => {
    return (
        useContext(AuthContext)
    )
}
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const signUp = async (email, password) => {
        setLoading(true);
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
            await sendEmailVerification(userCredentials.user)
            setCurrentUser(userCredentials.user)
        }
        catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
        });
        return () => unsubscribe();
    }, [])

    const value= {
        currentUser,
        error,
        loading,
        signUp
       
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}