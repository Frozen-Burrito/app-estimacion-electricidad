import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import { 
    Grid, Container
} from "@mui/material";

import { AuthContext } from "../../services/firebaseContext";
import { AuthState } from "../../services/root_reducer";

import LoginForm from "../../components/login_form";
import SignupForm from "../../components/signup_form";

interface AuthType {
    type: "sign-in" | "sign-up"
}

export default function AuthPage({ type }: AuthType) {

    const { isUserLoggedIn } = useContext(AuthContext) as AuthState;

    if (isUserLoggedIn) {
        navigate("/app/profile");
    }

    return (
        <Container maxWidth="sm">
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={2}>
                    { type == "sign-in" ? <LoginForm /> : <SignupForm /> }
                </Grid>
            </Grid>
        </Container>
    );
}
