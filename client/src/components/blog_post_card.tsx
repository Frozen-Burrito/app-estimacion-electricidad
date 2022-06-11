import React from "react";
import { Link } from "gatsby";
import { Card, CardHeader, CardMedia, Avatar, IconButton, CardContent, Typography, CardActionArea } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { IBlogResponse } from "..";
import { avatarColorFromName } from "../util/avatar_display_name";

type BlogPostProps = {
    blogPost: IBlogResponse
};

export default function BlogPostCard({ blogPost }: BlogPostProps) {

    const { author } = blogPost;

    const handleOptionsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();

        console.log("Opciones del post del blog")
    }

    const authorAvatar = blogPost.author.avatarUrl.length === 0 
        ? (
            <Avatar {...avatarColorFromName(author.displayName)} />
        )
        : (
            <Avatar alt={author.displayName} src={author.avatarUrl} />
        );

    return (
        <Card sx={{ maxWidth: "345px" }}>
            <CardActionArea 
                component={Link} 
                to={`/blog/${blogPost._id}`}
            >
                <CardHeader 
                    avatar={ authorAvatar }
                    title={blogPost.title}
                    subheader={blogPost.creationTime.substring(0, 10)}
                    action={
                        <IconButton 
                            aria-label="opciones" 
                            onMouseDown={(e:any) => e.stopPropagation()}
                            onClick={handleOptionsClick}
                        >
                            <MoreVert />
                        </IconButton>
                    }
                    />
                <CardMedia
                    component="img"
                    height="194"
                    image={blogPost.imageUrl}
                    alt="Imagen principal del articulo"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        { blogPost.shortDescription }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}