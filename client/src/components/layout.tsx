import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthProvider } from "../services/firebaseContext";
import NavBar from "./navbar";
import "../styles/global.css";

const defaultTheme = (isDark: boolean) => createTheme({
    palette: {
        mode: isDark ? 'dark' : 'light',
    },
});

export default function Layout({ children }: React.PropsWithChildren<any>) {
    return (
        <AuthProvider>
            <ThemeProvider theme={defaultTheme(false)}>
                <NavBar />
                <div style={{ marginTop: "108px" }}>
                    { children }
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}