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
    Divider, 
    Box
    
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff, Email, Google } from "@mui/icons-material";

import { AuthContext } from "../services/firebaseContext";
import { AuthState } from "../services/root_reducer";

interface LoginState {
    email: string;
    password: string;
}

export default function LoginForm() {

    const [values, setValues] = useState<LoginState>({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const { initialized, isLoading, authErrorCode, signInWithEmail, signInWithGoogle } = useContext(AuthContext) as AuthState;

    const handleInputChange = (targetName: keyof LoginState) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [targetName]: e.target.value });
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailAuth = async () => {
        // e.preventDefault();
        if (initialized && signInWithEmail != null) {
            await signInWithEmail(values.email, values.password);
        }
    }

    const handleGoogleAuth = async () => {
        if (initialized && signInWithGoogle != null) {
            await signInWithGoogle();
        }
    }
    
    return (
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
                Inicia Sesión
            </Typography>

            <Box>
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="login-email">Correo Electrónico</InputLabel>
                    <Input
                        id="login-email"
                        type="email"
                        value={values.email}
                        error={authErrorCode.includes("email") || authErrorCode.includes("user")}
                        onChange={handleInputChange("email")}
                    />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="login-password">Contraseña</InputLabel>
                    <Input
                        id="login-password"
                        error={authErrorCode.includes("password")}
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleInputChange("password")}
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

                <Stack direction="column" sx={{ mt: 4 }} spacing={2}>
                    <LoadingButton 
                        variant="contained" 
                        size="large"
                        loading={isLoading}
                        startIcon={<Email />}
                        sx={{}}
                        onClick={() => handleEmailAuth()}
                    >
                        Inicia Sesión con Correo
                    </LoadingButton>

                    <Divider>
                        <Typography 
                            variant="button"
                            noWrap>
                            O
                        </Typography>
                    </Divider>

                    <Button 
                        variant="contained" 
                        size="large"
                        startIcon={<Google />}
                        sx={{ 
                            backgroundColor: "background.paper", 
                            color: "grey.600", 
                            "&:hover": {
                                backgroundColor: "background.paper",
                                color: "grey.600",
                            }
                        }}
                        onClick={() => handleGoogleAuth()}
                    >
                        Continúa con Google
                    </Button>
                </Stack>
            </Box>
                    
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
                ¿No tienes una cuenta? 
                <Link to="/app/signup">Regístrate</Link>
            </Typography>
        </Paper>
    );
}
