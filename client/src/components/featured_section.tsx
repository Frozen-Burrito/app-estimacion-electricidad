import React from "react";

import { Container, Typography, Grid } from "@mui/material";

import ServiceCard from "./service_card";
import { IService } from "..";

export default function FeaturedSection() {

  const testService: IService = {
    _id: "6294bda7188dcf9e429f1ed6", 
    name: "Instalación de paneles solares", 
    creationTime: "2022-05-30T12:50:47.917Z", 
    imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsolartribune.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fistockphoto_000007078510XSmall-polycrystalline-cell.jpg&f=1&nofb=1", 
    description: "Un servicio completo de instalación de paneles solares en tu propia azotea por técnicos profesionales, seguro de calidad y monitoreo de rendimiento.", 
    features: [
      "Preparación de azotea",
      "3 horas de instalación.",
      "Garantía de 10 años",
    ], 
    price: 899.99, 
    discountPercent: 5, 
  }

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
          <Grid item xs={4}>
            <ServiceCard service={testService}/>
          </Grid>
          <Grid item xs={4}>
            <ServiceCard service={testService}/>
          </Grid>
          <Grid item xs={4}>
            <ServiceCard service={testService}/>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}