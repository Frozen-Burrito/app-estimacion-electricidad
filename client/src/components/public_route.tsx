import { RouteComponentProps } from "@reach/router";

export const PublicRoute = (
    props: { component: JSX.Element } & RouteComponentProps
) => props.component;
