import React from "react";
import { Container, Typography, Grid, Paper, Stack } from "@mui/material";

export default function PartnersSection() {
  return (
    <section id="partners">
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
          Socios Estratégicos
        </Typography>

        <Grid container spacing={2} sx={{ my: 3 }}>
          <Grid item xs={4}>
            <Paper>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fexpresswriters.com%2Fwp-content%2Fuploads%2F2015%2F09%2Fgoogle-new-logo-450x450.jpg&f=1&nofb=1"
                  alt="Logo de Google"
                  loading="lazy"
                  style={{ width: "100px", height: "100px"}}
                />
                <Typography variant="subtitle1" textAlign="center" fontWeight={500}>
                  Google
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.islandnetworks.com%2Fwp-content%2Fuploads%2Fmicrosoft-logo-2013-final-2.png&f=1&nofb=1"
                  alt="Logo de Microsoft"
                  loading="lazy"
                  style={{ width: "100px", height: "100px"}}
                />
                <Typography variant="subtitle1" textAlign="center" fontWeight={500}>
                  Microsoft
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <img
                  src="https://www.successfulculture.com/wp-content/uploads/2017/12/nasa-logo.png"
                  alt="Logo de NASA"
                  loading="lazy"
                  style={{ width: "100px", height: "100px"}}
                />
                <Typography variant="subtitle1" textAlign="center" fontWeight={500}>
                  NASA
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}