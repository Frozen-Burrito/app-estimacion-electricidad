import React from "react";
import { PageProps } from "gatsby";
import { IBlogResponse } from "..";
import Layout from "../components/layout";
import { Container, Typography } from "@mui/material";
import BlogPostCard from "../components/blog_post_card";

export default function BlogHome({ pageContext: { blogPosts } }: any) {

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

                <div>
                    { blogPosts && blogPosts.map((post: IBlogResponse) => (
                        <BlogPostCard blogPost={post} key={post._id} />
                    ))}
                </div>
            </Container>
        </Layout>
    );
}