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
  Button
} from "@mui/material";
import { Done, ShoppingBag } from "@mui/icons-material";
import { IService } from "..";

type ServiceProps = {
	service: IService;
};

export default function ServiceCard({ service }: ServiceProps) {

  const renderFeatures = () => {
    return service.features.map(feature =>
      <ListItemButton>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <ListItemText primary={feature} />
      </ListItemButton>
    );
  }

	return (
		<Card sx={{ maxWidth: "345px" }}>
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

				<Typography variant="body2" color="text.secondary">
					{service.description}
				</Typography>

				<List disablePadding>
					{ renderFeatures() }
				</List>

				<Button variant="outlined" size="large" startIcon={<ShoppingBag />}>
					${service.price} { service.discountPercent > 0 ? `-${service.discountPercent}%` : ""}
				</Button>
				</CardContent>
		</Card>
	);
}
