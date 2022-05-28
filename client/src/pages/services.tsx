import { Container, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/layout";

export default function Services() {

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
                    Servicios
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
                    Descubre todos los servicios y productos que ofrecemos para facilitar tu vida diaria.
                </Typography>
            </Container>
        </Layout>
    );
}