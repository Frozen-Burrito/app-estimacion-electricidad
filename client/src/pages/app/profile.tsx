import React, { useState, useContext } from "react";
import { Grid, Typography, Tabs, Tab, Container } from "@mui/material";

import TabPanel from "../../components/tab_panel";
import { AuthContext } from "../../services/firebaseContext";
import { AuthState } from "../../services/root_reducer";

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Profile() {

    const [ activeTab, setActiveTab ] = useState(0);

    const { user } = useContext(AuthContext) as AuthState;

    const handleTabChange = (e: React.SyntheticEvent, newActiveTab: number) => {
        setActiveTab(newActiveTab);
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={activeTab}
                        onChange={handleTabChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Perfil" {...a11yProps(0)} />
                        <Tab label="Notificaciones" {...a11yProps(1)} />
                        <Tab label="Configuración" {...a11yProps(2)} />
                    </Tabs>
                </Grid>
                <Grid item>
                    <TabPanel index={0} activePageIndex={activeTab}>
                        <Typography variant="h4">Perfil</Typography>

                        <Typography variant="subtitle1">Nombre: { user != null ? user.displayName : "Anónimo" }</Typography>
                        <Typography variant="subtitle1">Correo electrónico: { user != null ? user.email : "Sin correo registrado" }</Typography>
                    </TabPanel>
                    <TabPanel index={1} activePageIndex={activeTab}>
                        <Typography variant="h4">Notificaciones</Typography>
                    </TabPanel>
                    <TabPanel index={2} activePageIndex={activeTab}>
                        <Typography variant="h4">Configuración</Typography>
                    </TabPanel>
                </Grid>
            </Grid>
        </Container>
    );
}