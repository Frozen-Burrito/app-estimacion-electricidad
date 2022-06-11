import React from "react";

import { Grid, Container, Typography } from "@mui/material";
import TestimonialCard from "./testimonial_card";

export default function TestimonialsSection() {

  return (
    <section id="testimonios">
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
          Historias de Nuestros Clientes
        </Typography>

        <Grid container spacing={2} sx={{ my: 3 }}>
          <Grid item xs={4}>
            <TestimonialCard 
              name="Marco Torres" 
              photoUrl=""
              content="Hace cinco años, tenía clara mi meta de usar electricidad renovable para mi hogar, pero no sabía por donde comenzar. Irradiancia Solar me ayudó con mi proyecto y hoy mi hogar es más eficiente, sustentable y económico."
            />
          </Grid>
          <Grid item xs={4}>
            <TestimonialCard 
              name="Marco Torres" 
              photoUrl=""
              content="Hace cinco años, tenía clara mi meta de usar electricidad renovable para mi hogar, pero no sabía por donde comenzar. Irradiancia Solar me ayudó con mi proyecto y hoy mi hogar es más eficiente, sustentable y económico."
            />
          </Grid>
          <Grid item xs={4}>
            <TestimonialCard 
              name="Marco Torres" 
              photoUrl=""
              content="Hace cinco años, tenía clara mi meta de usar electricidad renovable para mi hogar, pero no sabía por donde comenzar. Irradiancia Solar me ayudó con mi proyecto y hoy mi hogar es más eficiente, sustentable y económico."
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}