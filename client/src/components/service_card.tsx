import React from "react";
import {
	Card,
	CardMedia,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
	CardContent,
	Typography,
  Button,
	CardActions
} from "@mui/material";
import { Done, ShoppingBag } from "@mui/icons-material";
import { IService } from "..";

type ServiceProps = {
	service: IService;
};

export default function ServiceCard({ service }: ServiceProps) {

  const renderFeatures = () => {
    return service.features.map((feature, index) =>
      <ListItemButton key={index}>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <ListItemText primary={feature} />
      </ListItemButton>
    );
  }

	return (
		<Card sx={{ maxWidth: "345px", height: "650px" }}>
			<CardMedia
				component="img"
				height="194"
				image={service.imageUrl}
				alt="Imagen principal del servicio"
			/>
			<CardContent>
				<Typography variant="h6">
					{service.name}
				</Typography>

				<Typography 
					variant="body2" 
					color="text.secondary"
					sx={{
						display: '-webkit-box',
						overflow: 'hidden',
						WebkitBoxOrient: 'vertical',
						WebkitLineClamp: 3
					}}
				>
					{service.description}
				</Typography>

				<List disablePadding>
					{ renderFeatures() }
				</List>
					
			</CardContent>
			<CardActions>
				<Button variant="outlined" size="large" startIcon={<ShoppingBag />}>
					${service.price} { service.discountPercent > 0 ? `-${service.discountPercent}%` : ""}
				</Button>
			</CardActions>
		</Card>
	);
}
