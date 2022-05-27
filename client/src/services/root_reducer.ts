import { FirebaseError } from "firebase/app";
import { Auth, User } from "firebase/auth";
import { Action, ActionType } from "./action_types";

import * as authFuncs from "./firebase_funcs";

export interface AuthState {
    initialized: boolean
    isLoading: boolean
    isUserLoggedIn: boolean
    authErrorCode: string
    user: User | null
    auth: Auth | null
    signInWithGoogle: (() => void) | null
    signUpWithEmail: ((credentials: UserCredentials) => Promise<User | null>) | null
    signInWithEmail: ((email: string, password: string) => Promise<User | null>) | null
    signOut: (() => void) | null
}

export interface UserCredentials {
    email: string
    password: string
    firstName: string | null
    lastName: string | null
}

function isAuth(authInstance: any): authInstance is Auth {
    return (authInstance as Auth).app !== undefined;
}

export default function reducer( state: AuthState, action: Action ): AuthState {
    switch (action.type) {
        case ActionType.AUTH_INIT:
            if (isAuth(action.data)) {
                return {
                    ...state,
                    initialized: true,
                    isLoading: false,
                    isUserLoggedIn: action.data.currentUser != null,
                    authErrorCode: state.authErrorCode,
                    auth: action.data,
                    user: action.data.currentUser,
                }
            } else {
                return {
                    ...state,
                    initialized: false,
                    isLoading: false,
                    isUserLoggedIn: false,
                }
            }
        case ActionType.SIGN_UP:
        case ActionType.SIGN_IN_EMAIL:
        case ActionType.SIGN_IN_GOOGLE:
            return {
                ...state,
                isLoading: true,
                authErrorCode: "",
            };
        case ActionType.SIGN_OUT:
            return {
                ...state,
                isLoading: true,
                user: action.data,
                authErrorCode: action.error.errorCode
            };
        case ActionType.AUTH_STATE_CHANGED:
            return {
                ...state,
                user: action.data,
                isLoading: false,
                isUserLoggedIn: action.data != null,
            }
        case ActionType.ERROR: 
            return {
                ...state,
                isLoading: false,
                authErrorCode: action.error
            };
        default:
            return state;
    }
}