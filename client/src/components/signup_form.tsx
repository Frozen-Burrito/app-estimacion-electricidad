import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { 
    FormControl, 
    Paper, 
    Typography, 
    InputLabel, 
    Input, 
    InputAdornment, 
    IconButton,
    Stack,
    Button,
    FormControlLabel, 
    Checkbox,
    Grid,
    TextField
    
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";

import { AuthContext } from "../services/firebaseContext";
import { AuthState, UserCredentials } from "../services/root_reducer";
import ContentDialog, { ContentDialogType } from "./content_dialog";

interface SignUpState {
    credentials: UserCredentials;
    isPrivacyAccepted: boolean;
}

export default function SignupForm() {

    const [values, setValues] = useState<SignUpState>({
        credentials: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        isPrivacyAccepted: false,
    });

    const [isDialogOpen, toggleDialogDisplay] = useState(false);
    const [activeDialogType, setActiveDialogType] = useState<ContentDialogType>("privacidad");

    const [showPassword, setShowPassword] = useState(false);

    const { initialized, isLoading, signUpWithEmail } = useContext(AuthContext) as AuthState;

    const handleCredentialsChange = (targetName: keyof UserCredentials) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, credentials: { 
            ...values.credentials,  
            [targetName]: e.target.value
        }});
    } 

    const handleInputChange = (targetName: keyof SignUpState) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [targetName]: e.target.checked });
    }

    const handleContentDialogOpen = (dialogType: ContentDialogType) => {
        setActiveDialogType(dialogType);
        toggleDialogDisplay(true);
    }

    const handleContentDialogClose = () => {
        toggleDialogDisplay(false);
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailAuth = async () => {
        if (initialized && signUpWithEmail != null) {
            const user = await signUpWithEmail(values.credentials);
        }
    }
    
    return (
        <>
            <Paper sx={{ p: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
                    Crea una Cuenta
                </Typography>

                <Grid
                    component="form"
                    noValidate
                    autoComplete="off"
                    container 
                    spacing={2}
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between">
                        
                    <Grid item xs={6}> 
                        <TextField 
                            fullWidth
                            label="Nombre"
                            variant="standard" 
                            value={values.credentials.firstName} 
                            sx={{ ml: 1 }}
                            onChange={handleCredentialsChange("firstName")} />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField 
                            fullWidth
                            label="Apellido"
                            variant="standard" 
                            sx={{ ml: 1 }}
                            value={values.credentials.lastName} 
                            onChange={handleCredentialsChange("lastName")} />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="login-email">Correo Electrónico</InputLabel>
                            <Input
                                id="login-email"
                                type="email"
                                value={values.credentials.email}
                                onChange={handleCredentialsChange("email")}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="login-password">Contraseña</InputLabel>
                            <Input
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                value={values.credentials.password}
                                onChange={handleCredentialsChange("password")}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControlLabel 
                            sx={{ ml: 1 }}
                            control={ 
                                <Checkbox 
                                    value={values.isPrivacyAccepted} 
                                    onChange={handleInputChange("isPrivacyAccepted")} 
                                /> } 
                            label={
                                <Typography
                                    variant="subtitle2"
                                    component="p"
                                    >
                                    He leído y estoy de acuerdo con la
                                    <Button 
                                        sx={{ textTransform: "none", p: 0, mx: 1 }} 
                                        variant="text"
                                        onClick={() => handleContentDialogOpen("privacidad")}>
                                        Política de Privacidad
                                    </Button>
                                    y el 
                                    <Button 
                                        sx={{ textTransform: "none", p: 0, mx: 1 }} 
                                        variant="text"
                                        onClick={() => handleContentDialogOpen("aviso-legal")}>
                                        Aviso Legal
                                    </Button>
                                </Typography>
                            }
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction="column" sx={{ mt: 4 }} spacing={2}>
                            <LoadingButton 
                                variant="contained" 
                                disabled={!values.isPrivacyAccepted}
                                loading={isLoading}
                                size="large"
                                startIcon={<Email />}
                                onClick={() => handleEmailAuth()}
                            >
                                Crear Nueva Cuenta
                            </LoadingButton>
                        </Stack>
                    </Grid>
                </Grid>

                <Typography
                    variant="subtitle1"
                    noWrap
                    sx={{
                        mt: 4,
                        mx: "auto",
                        display: { xs: 'none', md: 'flex' },
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    ¿Ya tienes una cuenta? 
                    <Link to="/app/login">Inicia Sesión</Link>
                </Typography>
            </Paper>
            
            <ContentDialog 
                contentType={activeDialogType}
                isOpened={isDialogOpen}
                onClose={handleContentDialogClose}
            />
        </>
    );
}
