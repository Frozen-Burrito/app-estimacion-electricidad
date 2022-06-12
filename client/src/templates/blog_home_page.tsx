import React from "react";
import { Link } from "gatsby";
import { Container, Typography, Fab, Stack, Grid } from "@mui/material";
import { Edit } from "@mui/icons-material";

import { IBlogResponse } from "..";
import Layout from "../components/layout";

import BlogPostCard from "../components/blog_post_card";

export default function BlogHome({ pageContext: { blogPosts } }: any) {

    return (
        <Layout>
            <Container>
                <Stack direction="row" justifyContent="space-between" align-items="flex-start" spacing={2}>
                    <div>
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
                            Blog
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
                            Novedades, recursos informativos y experiencias de clientes satisfechos.
                        </Typography>
                    </div>
                    
                    <Fab 
                        color="secondary" 
                        aria-label="escribir"
                        component={Link} 
                        to="/app/blog/write"
                    >
                        <Edit />
                    </Fab>
                </Stack>

                <Grid container spacing={2} sx={{ my: 3 }}>
                    { blogPosts && blogPosts.map((post: IBlogResponse) => (
                        <Grid item xs={4}>
                            <BlogPostCard blogPost={post} key={post._id} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    );
}