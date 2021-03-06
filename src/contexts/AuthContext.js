import React, { useContext, useEffect, useState } from 'react';
import firebase from '../firebase'

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const auth = new firebase.auth.GoogleAuthProvider();

    function signIn() {
        // function secureSignIn() {
        //     firebase.auth()
        //     .signInWithPopup(auth)
        //         .signInWithPopup(auth)
        //         .then(res => {
        //             var credential = res.credential;
        //             var token = credential.accessToken;
        //             var user = res.user;
        //             let loginInfo = { authUser: user, token, logged_in: true };
        //             setCurrentUser(loginInfo);
        //         })
        //         .catch(err => {
        //             var errCode = err.code;
        //             var errMessage = err.message;
        //             var email = err.email;
        //             var credential = err.credential;

        //             console.log({ errCode, errMessage, email, credential })
        //         })
        // }
        // return secureSignIn();
        return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                firebase.auth().signInWithPopup(auth);
            })
            .catch(err => {
                console.error(`${err.code}\n${err.message}`);
            })
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(u => {
            setCurrentUser(u);
        })
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signIn
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>     
    )
}
