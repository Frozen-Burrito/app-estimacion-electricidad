import React, { useState } from "react";

import { Container, Typography, Stack, Button, List, Box, InputLabel, FormControl, Input } from "@mui/material";
import { RequestQuote } from "@mui/icons-material";

import ContactItem from "./contact_item";

export default function ContactSection() {

  const [email, setEmail] = useState("");

  return (
    <section id="contacto">
      <Box sx={{ py: 4, width: "100%", backgroundColor: "grey.900", color: "grey.300" }}>
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
            Cuéntanos Sobre tu Proyecto
          </Typography>

          <Stack direction="row" justifyContent="space-between" align-items="flex-start" spacing={2} sx={{ color: "grey.200"}}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59715.14383029791!2d-103.45851824179688!3d20.7022442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4e98d5453d%3A0xc4fdd3929a2ecbd1!2sCETI%20Plantel%20Colomos!5e0!3m2!1ses-419!2smx!4v1654971652863!5m2!1ses-419!2smx" 
              width="600" 
              height="450" 
              style={{ border: "0" }} 
              loading="lazy" 
              // referrerpolicy="no-referrer-when-downgrade"
            />

            <Stack direction="column" justifyContent="space-between" align-items="flex-start" spacing={2} sx={{ color: "grey.200"}}>
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mb: 2,
                    mx: "auto",
                    display: { xs: 'none', md: 'flex' },
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Habla con Nuestros Asesores
                </Typography>
                
                <List>
                  <ContactItem name="Juan Perez" email="juan.per@gmail.com" phoneNumber="33-0000-0000"/>
                  <ContactItem name="Margarita Ramírez" email="margarita.ramirez@gmail.com" phoneNumber="33-0000-0001"/>
                </List>
              </Box>
              
              <Box>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    mb: 2,
                    mx: "auto",
                    display: { xs: 'none', md: 'flex' },
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Envíanos un E-Mail
                </Typography>
                
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="send-email" sx={{ color: "grey.400" }}>Correo Electrónico</InputLabel>
                  <Input
                    id="send-email"
                    type="email"
                    sx={{ color: "grey.200" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Box>

              <Button 
                variant="contained" 
                size="large"
                startIcon={<RequestQuote />}
                onClick={(e) => console.log("Cotizando idea...")}
              >
                Cotiza Tu Idea
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </section>
  );
}