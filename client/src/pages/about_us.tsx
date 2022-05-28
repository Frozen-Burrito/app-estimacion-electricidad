import React from "react";
import { Container, Box, Typography } from "@mui/material";

import Layout from "../components/layout";

const backdropUrl: string = "https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c";

export default function AboutUs() {

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
                    Sobre Nosotros
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
                    Conoce donde comenzamos, qué hacemos y a donde queremos llegar.
                </Typography>
            </Container>

            <Box 
                sx={{ 
                    maxWidth: "100vw", 
                    overflow: "hidden",
                    height: "50vh",
                    backgroundImage: "url(https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?w=1920&h=1079&fit=contain&auto=format)",
                    backgroundPosition: "bottom center"
                }}
            >
                {/* <img 
                    src={`${backdropUrl}?w=1920&h=1079&fit=contain&auto=format`}
                    srcSet={`${backdropUrl}?w=1920&h=1079&fit=crop&auto=format&dpr=2 2x`}
                    style={{ objectFit: "contain" }}
                    alt="Turbinas de viento en un campo"
                    loading="lazy"
                /> */}
            </Box>

            <Container maxWidth="md">
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mt: 5,
                        mb: 2,
                        mx: "auto",
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Historia
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    lineHeight={2}
                    textAlign="justify"
                    gutterBottom
                    // noWrap
                    sx={{
                        mt: 1,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                </Typography>

                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mt: 5,
                        mb: 2,
                        mx: "auto",
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lo que Hacemos
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    lineHeight={2}
                    textAlign="justify"
                    gutterBottom
                    sx={{
                        mt: 1,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                </Typography>

                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mt: 5,
                        mb: 2,
                        mx: "auto",
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Nuestros Objetivos y Visión
                </Typography>

                <Typography
                    variant="body1"
                    component="p"
                    lineHeight={2}
                    textAlign="justify"
                    gutterBottom
                    sx={{
                        mt: 1,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium quisquam quaerat ullam ipsa consequatur asperiores temporibus, libero, omnis itaque in deserunt, odio est rem iste. Dicta quo mollitia velit?
                </Typography>
            </Container>
        </Layout>
    );
}