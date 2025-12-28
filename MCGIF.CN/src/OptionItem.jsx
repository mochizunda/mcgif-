import { Grid, Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function OptionItem({ name, children, enable, reset }) {
    const { t } = useTranslation();

    return (
        <Box position="relative">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                justifyContent: "center",
                alignItems: "center",
                my: 1
            }}>
                <Grid size={3} >
                    <Typography align="left">{t(`config.${name}`)}</Typography>
                </Grid>
                <Grid size={7} align="left">
                    {children}
                </Grid>
                <Grid size={2} >
                    <Button variant="outlined" onClick={reset} disabled={!enable} sx={{maxWidth: '100%'}}>{t("config.reset")}</Button>
                </Grid>
            </Grid>

            {!enable && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(230, 230, 230, 0.6)',
                        zIndex: 1, 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'auto',
                    }}
                >
                </Box>
            )}
        </Box>
    );
}