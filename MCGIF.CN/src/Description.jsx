import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material"; 
import { useTranslation } from 'react-i18next';

export default function Description({ open, setOpen }) {
    const { t } = useTranslation();

    return (
        <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
            <DialogTitle>关于本站</DialogTitle>
            <DialogContent>
                <Typography sx={{ whiteSpace: "pre-line" }}>{t("description")}</Typography>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 2 }}>
                <Button onClick={() => setOpen(false)}>{t("close")}</Button>
            </DialogActions>
        </Dialog>
    )
}