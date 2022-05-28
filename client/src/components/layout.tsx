import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AuthProvider } from "../services/firebaseContext";
import NavBar from "./navbar";
import "../styles/global.css";
import Footer from "./footer";

const defaultTheme = (isDark: boolean) => createTheme({
    palette: {
        mode: isDark ? 'dark' : 'light',
    },
});

interface LayoutProps {
    showFooter?: boolean;
}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {

    const { children, showFooter } = props;

    return (
        <AuthProvider>
            <ThemeProvider theme={defaultTheme(false)}>
                <NavBar />
                <div style={{ marginTop: "108px", minHeight: "100vh" }}>
                    { children }
                </div>
                { showFooter === undefined || showFooter ? <Footer /> : null }
            </ThemeProvider>
        </AuthProvider>
    );
}