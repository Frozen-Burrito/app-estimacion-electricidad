import * as React from "react";
import { 
    Dialog, 
    DialogTitle, 
    DialogContent,
    DialogActions,
    Typography,
    Button,
    IconButton 
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { Close } from "@mui/icons-material"

export type ContentDialogType = "privacidad" | "aviso-legal";

export interface ContentDialogProps {
    // id: string;
    isOpened: boolean;
    contentType: ContentDialogType;
    actions?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export default function ContentDialog(props: ContentDialogProps) {

    const { contentType, isOpened, onClose, ...other } = props;

    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={isOpened}>
            <DialogTitle sx={{ m: 0, p: 2 }} { ...other }>

                { contentType == "aviso-legal" ? "Aviso Legal" : "Política de Privacidad" }

                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                    Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                    magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                    ullamcorper nulla non metus auctor fringilla.
                </Typography>
            </DialogContent>
            
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    OK
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}