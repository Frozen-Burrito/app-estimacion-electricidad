import React, { useEffect, useState } from "react";

import { Typography, Container, Stack, Button } from "@mui/material";

import Layout from "../components/layout";

import VideoFondo from "../assets/home.mp4";

import ContactSection from "../components/contact_section";
import TestimonialsSection from "../components/testimonials_section";
import FeaturedSection from "../components/featured_section";
import PartnersSection from "../components/partners_section";

const IndexPage = (): JSX.Element => {

  const API_URL = "/api/v1";

  const [message, setMessage] = useState("Sin datos :(");

  useEffect(() => {
    async function getMensaje() {
      const url = `${API_URL}/hola`;
      const response = await fetch(url);

      console.log(response);

      const data = await response.json();

      setMessage(data.message);
    }

    getMensaje();

  }, []);

  return (
    <Layout includeTopMargin={false}>
      <main className="hero">
        <div className="video-fondo">
          <video autoPlay muted loop id="video-home">
            <source src={VideoFondo} type="video/mp4" />
          </video>
        </div>
        
        <div className="overlay-oscuro" />

        <div className="contenido-hero">
          <Typography 
            variant="h2"
            sx={{ color: "grey.50", mb: "1.6rem", fontWeight: 500 }}
          >
            Transiciona a <span className="resaltado-primario">Energías Renovables</span> Hoy
          </Typography>

          <Typography
            variant="h4"
            sx={{ color: "grey.200" , fontWeight: 400}}
          >
            El mejor momento para invertir en fuentes renovables fue hace veinte años.
            El segundo mejor momento es ahora.
          </Typography>
        </div>
      </main>

      <FeaturedSection />

      <TestimonialsSection />

      <ContactSection />

      <PartnersSection />
    </Layout>
  );
}

export default IndexPage
