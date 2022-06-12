import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, CircularProgress, Box, Stack } from "@mui/material";
import { SyncProblem } from "@mui/icons-material";

import { axiosClient } from "../api/axios_client";
import Layout from "../components/layout";
import { IService } from "..";
import ServiceCard from "../components/service_card";

export default function Services() {

    const [featuredProducts, setFeaturedProducts] = useState<IService[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        async function getFeaturedProducts(count: number) {

            try {
                const result = await axiosClient.get("/productos");

                console.log(result);

                const products: IService[] = result.data.data;

                if (result.status === 200) {
                setFeaturedProducts(products.slice(0, count));
                }
            } catch (error) {
                console.log("Unable to fetch blog entries: ", error);
                setHasError(true);
            }

            setIsLoading(false);
        } 

        setIsLoading(true);
        setHasError(false);

        getFeaturedProducts(24);
        
        
    }, []);

    function renderServicesAndProducts() {

        if (isLoading) {
            return (
                <Stack 
                    direction="column" 
                    alignItems="center" 
                    justifyContent="center" 
                    spacing={2}
                    sx={{ 
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <CircularProgress />
                </Stack>
            );
        }

        if (hasError ) {
            return (
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
                    <SyncProblem />
                    <Typography
                        variant="subtitle1"
                        noWrap
                        sx={{
                            mb: 2,
                            mx: "auto",
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        No es posible obtener los servicios por el momento. Intente más tarde.
                    </Typography>
                </Stack>
            )
        }

        return (
            <Grid container spacing={2} sx={{ my: 3 }}>
                { featuredProducts.map(product => (
                    <Grid item xs={4}>
                        <ServiceCard service={product} key={product._id}/>
                    </Grid>
                ))}
            </Grid>
        );
    }

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

                { renderServicesAndProducts() }
            </Container>
        </Layout>
    );
}