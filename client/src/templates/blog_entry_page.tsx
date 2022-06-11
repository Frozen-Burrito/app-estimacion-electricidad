import React from "react";
import showdown from "showdown";
import { Container, Typography, Stack, Avatar, Toolbar, Fab } from "@mui/material";
import { Today, Schedule, KeyboardArrowUp } from "@mui/icons-material";

import Layout from "../components/layout";
import { IBlogResponse } from "..";
import { avatarColorFromName } from "../util/avatar_display_name";
import ScrollToTop from "../components/scroll_top";

import "../styles/blog.css";

export default function BlogEntryPage({ pageContext: { blogPost } }: any) {

    const blog: IBlogResponse = blogPost;
    
    console.log(blog);

    const authorAvatar = blog.author.avatarUrl.length === 0 
    ? (
        <Avatar {...avatarColorFromName(blog.author.displayName)} />
    )
    : (
        <Avatar alt={blog.author.displayName} src={blog.author.avatarUrl} />
    );

    const converter = new showdown.Converter();

    const htmlContent = converter.makeHtml(blog.mdContent);

    return (
        <Layout>
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    sx={{
                        mb: 3,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    { blog.title }
                </Typography>

                <Toolbar style={{ minHeight: 0 }} id="back-to-top-anchor" />

                <Typography
                    variant="subtitle1"
                    component="h5"
                    sx={{
                        mb: 3,
                        mx: "auto",
                        fontSize: "22px",
                        display: { xs: 'none', md: 'flex' },
                        color: 'text.secondary',
                        textDecoration: 'none',
                    }}
                >
                    { blog.shortDescription }
                </Typography>

                <Stack direction="row" spacing={4} justifyContent="flex-start" sx={{ mb: 4 }}>
                    <Stack direction="row" spacing={2} justifyContent="flex-start" alignItems="center">
                        { authorAvatar }

                        <Typography
                            variant="subtitle1"
                            component="p">
                            { blog.author.displayName }
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                        <Today />

                        <Typography
                            variant="subtitle1"
                            component="p">
                            { blog.creationTime.substring(0, 10) }
                        </Typography>
                    </Stack>

                    <Stack direction="row" spacing={1} justifyContent="flex-start" alignItems="center">
                        <Schedule />

                        <Typography
                            variant="subtitle1"
                            component="p">
                            { `${Math.ceil((blog.mdContent.length / 150)).toString()} mins. de lectura.` }
                        </Typography>
                    </Stack>
                </Stack>

                <img 
                    src={ blog.imageUrl }
                    alt={ blog.title }
                    style={{ maxWidth: "100%", marginBottom: "1.2rem" }}
                    loading="lazy"
                />

                <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: htmlContent }}/>

                <Typography
                    variant="body1"
                    component="p">
                    Última actualización: { blog.lastUpdated != undefined ? blog.lastUpdated.substring(0, 10) : "Nunca" }
                </Typography>
            </Container>

            <ScrollToTop>
                <Fab color="secondary" size="medium" aria-label="Regresar arriba">
                    <KeyboardArrowUp />
                </Fab>
            </ScrollToTop>
        </Layout>
    );
}