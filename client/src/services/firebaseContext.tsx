import React, { useReducer, createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import * as authFuncs from "./firebase_funcs";

import { Action, ActionType } from "./action_types";
import rootReducer, { AuthState, UserCredentials,  } from "./root_reducer";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_CONFIG_APIKEY,
    authDomain: process.env.FIREBASE_CONFIG_AUTHDOMAIN,
    projectId: process.env.FIREBASE_CONFIG_PROJECTID,
    storageBucket: process.env.FIREBASE_CONFIG_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_CONFIG_APPID,
    measurementId: process.env.FIREBASE_CONFIG_MEASUREMENTID
};

const initState: AuthState = {
    initialized: false,
    isLoading: false,
    isUserLoggedIn: false,
    authErrorCode: "",
    user: null,
    auth: null,
    signInWithGoogle: null,
    signUpWithEmail: null,
    signInWithEmail: null,
    signOut: null
};

export const AuthContext = createContext<AuthState>(initState);

type Props = {
    children?: React.ReactNode;
}
//React.FC<JSX.Element>
export const AuthProvider = ({ children }: Props) => {

    const [ state, dispatch ] = useReducer(rootReducer, initState);
    const [ authListenerAdded, setAuthListenerAdded ] = useState(false);

    if (!authListenerAdded) {
        if (state.initialized && state.auth != null) {
            // Escuchar stream de estado de autenticacion.
            console.log("Registrando listener para estado de autenticacion");

            setAuthListenerAdded(true);

            onAuthStateChanged(state.auth, (user) => {
                const action: Action = {
                    type: ActionType.AUTH_STATE_CHANGED,
                    data: user,
                    error: null
                };
    
                dispatch(action);
            });
    
        } else {
            console.log("Inicializando firebase");
    
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            
            console.log("Firebase Auth initialized");
    
            const initAction: Action = {
                type: ActionType.AUTH_INIT,
                data: auth,
                error: null
            };
    
            dispatch(initAction);
        }
    }

    return (
        <AuthContext.Provider
            value={{
                initialized: state.initialized,
                isLoading: state.isLoading,
                isUserLoggedIn: state.isUserLoggedIn,
                authErrorCode: state.authErrorCode,
                auth: state.auth,
                user: state.user,
                signInWithGoogle: authFuncs.signInWithGoogle,
                signUpWithEmail: (credentials: UserCredentials) => authFuncs.signUpWithEmail(dispatch, credentials),
                signInWithEmail: (email: string, password: string) => authFuncs.signInWithEmail(dispatch, email, password),
                signOut: authFuncs.signOut,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}