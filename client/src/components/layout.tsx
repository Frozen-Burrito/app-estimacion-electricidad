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
        primary: {
            main: "#eed102"
        },
        secondary: {
            main: "#021eee"
        }
    },
});

interface LayoutProps {
    showFooter?: boolean;
    includeTopMargin?: boolean;
}

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {

    const { children, showFooter, includeTopMargin } = props;

    const contentMarginTop = includeTopMargin || includeTopMargin == null ? "108px" : "0px";

    return (
        <AuthProvider>
            <ThemeProvider theme={defaultTheme(false)}>
                <NavBar />
                <div style={{ marginTop: contentMarginTop.toString(), minHeight: "100vh" }}>
                    { children }
                </div>
                { showFooter === undefined || showFooter ? <Footer /> : null }
            </ThemeProvider>
        </AuthProvider>
    );
}