import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import { 
    AppBar, 
    Container, 
    Toolbar, 
    Typography,
    Box,
    IconButton,
    MenuItem,
    Menu, 
    Button,
    Tooltip,
    Avatar,
    Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AuthContext } from "../services/firebaseContext";
import { AuthState } from "../services/root_reducer";
import { INavRouteItem } from "../../..";

const pages: INavRouteItem[] = [
    { label: "Sobre Nosotros", path: "/about_us" },
    { label: "Servicios", path: "/services" },
    { label: "Blog", path: "/blog" },
    { label: "Contacto", path: "/contact" },
];

const authOptions = ["Perfil", "Cerrar Sesión"];

export default function NavBar() {

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const { isUserLoggedIn, user, signOut } = useContext(AuthContext) as AuthState;

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    
    const handleNavItemSelected = (navItem: INavRouteItem) => {
        setAnchorElNav(null);

        navigate(navItem.path);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    const handleMenuItemSelected = (item: string) => {

        switch (item) {
            case authOptions[0]: 
                console.log("Perfil seleccionado");
                navigate("/app/profile");
                break;
            case authOptions[1]:
                console.log("Cerrar sesion seleccionado");
                if (signOut != null) {
                    signOut();
                }
                break;
        }

        setAnchorElUser(null);
    };

    const opcionesAutenticacion: JSX.Element = (
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={() => navigate("/app/login")}>Inicia Sesión</Button>
            <Button variant="contained" onClick={() => navigate("/app/signup")}>Comienza Hoy</Button>
        </Stack>
    );

    const menuOpcionesUsuario: JSX.Element = user == null 
        ? ( <> </>)
        : (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Opciones de usuario">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={ user.displayName != null ? user.displayName : "Anonimo" } src="/static/images/avatar/2.jpg" />
            </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {authOptions.map((setting) => (
                    <MenuItem key={setting} onClick={() => handleMenuItemSelected(setting)}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );

    return (
        <AppBar position="fixed" sx={{ backgroundColor: "background.paper", color: "text.primary" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
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
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleNavItemSelected}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page.path} onClick={() => handleNavItemSelected(page)}>
                                    <Typography textAlign="center">{page.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page.path}
                            onClick={() => handleNavItemSelected(page)}
                            sx={{ my: 2, fontSize: "18px", color: 'text.primary', display: 'block', textTransform: "capitalize" }}
                        >
                            {page.label}
                        </Button>
                        ))}
                    </Box>
                    
                    { isUserLoggedIn  ? menuOpcionesUsuario : opcionesAutenticacion }

                </Toolbar>   
            </Container> 
        </AppBar>
    );
}