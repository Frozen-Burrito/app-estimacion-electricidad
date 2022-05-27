import React, { useContext } from "react";
import { navigate } from "gatsby";
import { AuthContext } from "../services/firebaseContext";
import { AuthState } from "../services/root_reducer";

function ProtectedRoute({ component: Component, location, ...rest }: React.ComponentProps<any>) {

    const { isUserLoggedIn } = useContext(AuthContext) as AuthState;

    if (!isUserLoggedIn && (location.pathname !== "/app/login" || location.pathname !== "/app/signup")) {
        console.log("Ruta no autorizada");
        navigate("/app/login");
    }

    return <Component { ...rest } />
}

export default ProtectedRoute;
