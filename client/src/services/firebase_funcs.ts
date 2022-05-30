import React from "react";
import { 
    getAuth, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    User, 
    updateProfile, 
} from "firebase/auth";
import { axiosClient } from "../api/axios_client";
import { Action, ActionType } from "./action_types";
import { UserCredentials } from "./root_reducer";
import { IUser } from "../../..";

export const signUpWithEmail = async (dispatch: React.Dispatch<Action>, credentials: UserCredentials): Promise<User | null> => {
    try {
        const authAction: Action = {
            type: ActionType.SIGN_IN_EMAIL,
            data: undefined,
            error: undefined
        };

        dispatch(authAction);

        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
            auth, 
            credentials.email, 
            credentials.password
        );

        const user = userCredential.user;
        
        if (auth.currentUser != null) {

            const userDisplayName = `${credentials.firstName} ${credentials.lastName}`;

            await updateProfile(auth.currentUser, {
                displayName: userDisplayName
            });

            const creationTime = user.metadata.creationTime !== undefined ? user.metadata.creationTime : "no-date";

            const userData: IUser = {
                uid: user.uid,
                email: user.email,
                displayName: userDisplayName,
                providerId: user.providerId,
                creationTime
            };

            const result = await axiosClient.post("/usuarios/sign-up", userData);

            console.log(result);
        }

        return user;
        
    } catch (error: any) {
        const errCode = error.code;
        const errMsg = error.message;

        const errAction: Action = {
            type: ActionType.ERROR,
            data: undefined,
            error: errCode
        };

        dispatch(errAction);

        console.log("Error de autenticacion, codigo = ", errCode, ": ", errMsg)
    }

    return null;
}

export const signInWithEmail = async (dispatch: React.Dispatch<Action>, email: string, password: string): Promise<User | null> => {

    try {
        const authAction: Action = {
            type: ActionType.SIGN_IN_EMAIL,
            data: undefined,
            error: undefined
        };

        dispatch(authAction);

        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        return userCredential.user;
        
    } catch (error: any) {
        const errCode = error.code;
        const errMsg = error.message;

        const errAction: Action = {
            type: ActionType.ERROR,
            data: undefined,
            error: errCode
        };

        dispatch(errAction);

        console.log("Error de autenticacion, codigo = ", errCode, ": ", errMsg)
    }

    return null;
}

export const signInWithGoogle = async () => {

    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        auth.useDeviceLanguage();

        const result = await signInWithPopup(auth, provider);

        return result.user;
        
    } catch (error: any) {
        const errCode = error.code;
        const errMsg = error.message;

        console.log("Error de autenticacion, codigo = ", errCode, ": ", errMsg)
    }
}

export const signOut = async () => {
    try {
        const auth = getAuth();
        await auth.signOut();
    } catch (error: any) {
        const errCode = error.code;
        const errMsg = error.message;

        console.log("Error de autenticacion, codigo = ", errCode, ": ", errMsg)
    }
}