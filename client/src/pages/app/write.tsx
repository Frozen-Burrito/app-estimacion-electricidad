import React from "react";
import { Grid, Container } from "@mui/material";
import WriteBlogForm from "../../components/write_blog_form";

export default function WriteBlogPage() {
	return (
		<Container maxWidth="sm">
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: "100vh" }}
			>
				<Grid item xs={2}>
					<WriteBlogForm />
				</Grid>
			</Grid>
		</Container>
	);
}
