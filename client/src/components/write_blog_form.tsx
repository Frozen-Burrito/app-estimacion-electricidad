import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import {
	FormControl,
	Paper,
	Typography,
	InputLabel,
	Input,
	InputAdornment,
	Stack,
	Grid,
	TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Image, PostAdd } from "@mui/icons-material";

import { publishNewEntry, getUserWithFirebaseUID } from "../services/blog_api";
import { INewBlogEntry } from "..";
import { AuthState } from "../services/root_reducer";
import { AuthContext } from "../services/firebaseContext";

export default function WriteBlogForm() {
	const [values, setValues] = useState<INewBlogEntry>({
		title: "",
        authorId: "",
		imageUrl: "",
		shortDescription: "",
		mdContent: "",
	});

    const { user } = useContext(AuthContext) as AuthState;

	const handleCredentialsChange =
		(targetName: keyof INewBlogEntry) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setValues({
				...values,
				[targetName]: e.target.value,
			});
		};

	const handlePublish = async () => {
		try {

            if (user == null) throw Error("Autenticacion fallida: El usuario no fue encontrado o no es valido.");

            const userData = await getUserWithFirebaseUID(user.uid);

            if (userData == null) throw Error("Autenticacion fallida: No fue posible obtener datos del usuario.");
            
            const blogEntry: INewBlogEntry = {
                title: values.title,
                authorId: userData?._id,
                imageUrl: values.imageUrl,
                shortDescription: values.shortDescription,
                mdContent: values.mdContent,
            };

            console.log(blogEntry.authorId);

            const result = await publishNewEntry(blogEntry);

            navigate("/blog");

        } catch (error) {
            console.error(error);
        }
	};

	return (
		<>
			<Paper
				sx={{
					p: 5,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="h4"
					noWrap
					sx={{
						mb: 2,
						mx: "auto",
						display: { xs: "none", md: "flex" },
						color: "inherit",
						textDecoration: "none",
					}}
				>
					Publica una Entrada del Blog
				</Typography>

				<Grid
					component="form"
					noValidate
					autoComplete="off"
					container
					spacing={2}
					direction="row"
					alignItems="center"
					justifyContent="space-between"
				>
					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Título"
							variant="standard"
							value={values.title}
							sx={{ ml: 1 }}
							onChange={handleCredentialsChange("title")}
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							fullWidth
							label="Resumen"
							variant="standard"
							sx={{ ml: 1 }}
							value={values.shortDescription}
							onChange={handleCredentialsChange("shortDescription")}
						/>
					</Grid>

					<Grid item xs={12}>
						<FormControl fullWidth sx={{ m: 1 }} variant="standard">
							<InputLabel htmlFor="image-url">URL de la Imagen</InputLabel>
							<Input
								id="image-url"
								type="url"
								value={values.imageUrl}
								onChange={handleCredentialsChange("imageUrl")}
								endAdornment={
									<InputAdornment position="end">
										<Image />
									</InputAdornment>
								}
							/>
						</FormControl>
					</Grid>

					<Grid item xs={12}>
						<TextField
							id="filled-multiline-flexible"
							label="Contenido"
                            fullWidth
							multiline
							sx={{ ml: 1 }}
							maxRows={100}
							value={values.mdContent}
							onChange={handleCredentialsChange("mdContent")}
							variant="standard"
						/>
					</Grid>


					<Grid item xs={12}>
						<Stack direction="column" sx={{ mt: 4 }} spacing={2}>
							<LoadingButton
								variant="contained"
								// loading={isLoading}
								size="large"
								startIcon={<PostAdd />}
								onClick={handlePublish}
							>
								Publicar
							</LoadingButton>
						</Stack>
					</Grid>
                </Grid>
			</Paper>
		</>
	);
}
