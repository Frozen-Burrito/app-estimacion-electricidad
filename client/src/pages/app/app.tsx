import React from "react";
import { Router } from "@reach/router";

import Layout from "../../components/layout"
import ProtectedRoute from "../../components/protected_route";
import { PublicRoute } from "../../components/public_route";

import Profile from "./profile";
import AuthPage from "./auth_page";

const App = (): JSX.Element => {

  return (
    <Layout showFooter={false}>
      <Router basepath="/app">
        <PublicRoute path="/login" component={<AuthPage type="sign-in"/>}/>
        <PublicRoute path="/signup" component={<AuthPage type="sign-up"/>}/>
        <ProtectedRoute path="/profile" component={ Profile } />
      </Router>
    </Layout>
  );
}

export default App