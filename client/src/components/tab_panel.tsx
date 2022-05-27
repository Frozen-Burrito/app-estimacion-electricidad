import React from "react";
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    activePageIndex: number;
}

export default function TabPanel(props: TabPanelProps) {
    const { children, index, activePageIndex, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ activePageIndex !== index }
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            { activePageIndex === index && (
                <Box sx={{ px: 3}}>
                    { children }
                </Box>
            )}
        </div>
    );
}