import { Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/layout";

export default function Contact() {

    return (
        <Layout>
            <Container>
                <Typography
                    variant="h4"
                    noWrap
                    sx={{
                        mb: 2,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Hablemos Más
                </Typography>

                <Typography
                    variant="subtitle1"
                    component="h6"
                    noWrap
                    sx={{
                        mb: 3,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Entra en contacto con nuestros especialistas, que te ayudarán a planear y llevar a cabo tus objetivos de uso responsable de electricidad.
                </Typography>
            </Container>
        </Layout>
    );
}