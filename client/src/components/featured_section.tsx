import React, { useState, useEffect } from "react";

import { Container, Typography, Grid } from "@mui/material";

import { axiosClient } from "../api/axios_client";

import ServiceCard from "./service_card";
import { IService } from "..";

export default function FeaturedSection() {

  const [featuredProducts, setFeaturedProducts] = useState<IService[]>([]);

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
      }
    } 

    getFeaturedProducts(3);
    
  }, []);

  return (
    <section id="destacados">
      <Container sx={{ py: 4 }}>
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
          Servicios Populares
        </Typography>

        <Grid container spacing={2} sx={{ my: 3 }}>
          { featuredProducts.map(product => (
            <Grid item xs={4}>
              <ServiceCard service={product} key={product._id}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}