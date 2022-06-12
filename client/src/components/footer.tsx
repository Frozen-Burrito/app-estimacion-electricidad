import React from "react";
import { navigate } from "gatsby";
import { Grid, Container, Box, Stack, Typography, Divider, Button, Link, IconButton } from "@mui/material";
import { Mail, Twitter, Instagram, Pinterest } from "@mui/icons-material";

import { INavRouteItem } from "../";

const pages: INavRouteItem[] = [
    { label: "Sobre Nosotros", path: "/about_us" },
    { label: "Servicios", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contacto", path: "/contact" },
];

function SocialMediaButtons (): JSX.Element {
    return (
        <Stack direction="row" justifyContent="flex-end" align-items="flex-end" spacing={2} sx={{ color: "grey.200"}}>
            <Link href="mailto:a18300290@ceti.mx" color={"inherit"}>
                <IconButton
                    color="inherit"
                    aria-label="contáctanos por correo electrónico"
                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >
                    <Mail />
                </IconButton>
            </Link>
            <Link href="https://www.instagram.com/" color={"inherit"}>
                <IconButton
                    color="inherit"
                    aria-label="Conócenos en Instagram"
                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >
                    <Instagram />
                </IconButton>
            </Link>
            <Link href="https://twitter.com/" color={"inherit"}>
                <IconButton
                    color="inherit"
                    aria-label="Conócenos en Twitter"
                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >
                    <Twitter />
                </IconButton>
            </Link>
            <Link href="https://www.pinterest.com/" color={"inherit"}>
                <IconButton
                    color="inherit"
                    aria-label="Conócenos en Pinterest"
                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                >
                    <Pinterest />
                </IconButton>
            </Link>
        </Stack>
    );
}

export default function Footer() {

    const handleNavItemSelected = (navItem: INavRouteItem) => {
        navigate(navItem.path);
    };

    return (
        <footer>
            <Box sx={{ mt: 3, py: 5, backgroundColor: "grey.900", color: "grey.300" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Irradiancia 
                                <img 
                                    src="../../icon.png" 
                                    style={{ width: "32px", height: "32px"}} 
                                    loading="lazy"
                                />
                                Solar
                            </Typography>
                            
                            <Box>
                                <Typography style={{display: "inline-block"}}>
                                    Desarrollado por 
                                </Typography>

                                <Typography sx={{ ml: 1, display: "inline-block"}}>
                                    <Link target="_blank" href="https://github.com/Frozen-Burrito" >
                                        Fernando Mendoza
                                    </Link>
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={3} />

                        <Grid item xs={2}>
                            <SocialMediaButtons />
                        </Grid>

                        <Grid item xs={1} />

                        <Grid item xs={2}>
                            <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={1}>
                                {pages.map((page) => (
                                <Button
                                    key={page.path}
                                    onClick={() => handleNavItemSelected(page)}
                                    sx={{ fontSize: "16px", color: 'grey.200', textAlign: "end", display: 'block', textTransform: "capitalize" }}
                                >
                                    {page.label}
                                </Button>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}