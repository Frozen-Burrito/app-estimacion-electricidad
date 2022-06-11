import React from "react";

import { ListItem, ListItemIcon, ListItemButton, ListItemText, Stack } from "@mui/material";
import { Email, Phone } from "@mui/icons-material";

interface ContactItemProps {
  name: string;
  email?: string;
  phoneNumber?: string;
}

export default function ContactItem(props: ContactItemProps) {

  const { name, email, phoneNumber } = props;

  return (
    <ListItem disablePadding>
      <ListItemButton>
        <Stack direction="column" justifyContent="flex-start" align-items="flex-start" spacing={2} sx={{ color: "grey.200"}}>
          <ListItemText>{name}</ListItemText>

          <Stack direction="row" justifyContent="space-between" align-items="center" spacing={2} sx={{ color: "grey.200"}}>
            <div style={{ display: "flex", alignItems: "center"}}>
              <ListItemIcon>
                <Email sx={{ color: "grey.50"}} />
              </ListItemIcon>
              <ListItemText>{email}</ListItemText>
            </div>

            <div style={{ display: "flex", alignItems: "center"}}>
              <ListItemIcon>
                <Phone sx={{ color: "grey.50"}}/>
              </ListItemIcon>
              <ListItemText>{phoneNumber}</ListItemText>
            </div>
          </Stack>
        </Stack>
      </ListItemButton>
    </ListItem>
  );
}