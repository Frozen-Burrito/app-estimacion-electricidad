import React from "react";
import { Link } from "gatsby";
import {
	Card,
	CardHeader,
	CardMedia,
	Avatar,
	Stack,
	CardContent,
	Typography,
	CardActionArea,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";

type TestimonialProps = {
	name: string;
	photoUrl: string;
	content: string;
};

export default function TestimonialCard(props: TestimonialProps) {

	const { name, photoUrl, content } = props;

	return (
		<Card sx={{ maxWidth: "345px" }}>
			<CardActionArea>
				<CardContent>
          <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Avatar alt={name} src={photoUrl} />

            <Typography variant="subtitle1" textAlign="center" fontWeight={500}>
              {name}
            </Typography>
            <Typography variant="body1" textAlign="center" color="text.secondary">
              {content}
            </Typography>
          </Stack>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
