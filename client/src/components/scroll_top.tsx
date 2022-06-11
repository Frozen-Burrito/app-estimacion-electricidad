import React from "react";
import { Box, Zoom, useScrollTrigger } from "@mui/material";

interface IScrollProps {
    children: React.ReactElement;
}

export default function ScrollToTop(props: IScrollProps) {

    const { children } = props;

    const trigger = useScrollTrigger();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (e.target as HTMLDivElement).ownerDocument || document
        ).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}>
                { children }
            </Box>
        </Zoom>
    );
}