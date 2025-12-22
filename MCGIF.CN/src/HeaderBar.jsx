import { AppBar, Container, Toolbar, Stack, Typography, Select, MenuItem } from '@mui/material'
import Description from './Description.jsx'
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function HeaderBar() {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    return (
        <AppBar
            position="sticky"
            elevation={0}
            className="bar"
            sx={{
                boxShadow: 2,
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ py: 1.5, minHeight: '88px' }}>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ width: '100%' }}
                    >
                        <Stack direction="row" sx={{
                            height: '80%',
                            justifyContent: "center",
                            alignItems: "center"
                        }} spacing={2}>
                            <img src="/mcgif.svg" alt="logo" style={{ height: '80%' }} />

                            <Typography
                                variant="h4"
                                fontWeight={700}
                                sx={{
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                }}
                            >{t("title")}</Typography>
                        </Stack>

                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                            <Typography variant='h5' onClick={() => setOpen(true)} sx={{ "&:hover": { textDecoration: "underline" } }} style={{ cursor: 'pointer' }}>{t("about")}</Typography>

                            <Select
                                value={i18n.language.substring(0, 2)}
                                onChange={(event) => i18n.changeLanguage(event.target.value)}
                                label={t("language")}
                            >
                                <MenuItem value={"zh"}>中文</MenuItem>
                                <MenuItem value={"en"}>English</MenuItem>
                                <MenuItem value={"ja"}>日本語</MenuItem>
                                <MenuItem value={"ko"}>한국어</MenuItem>
                                <MenuItem value={"de"}>Deutsch</MenuItem>
                                <MenuItem value={"ru"}>русский язык</MenuItem>
                            </Select>
                        </Stack>
                    </Stack>
                </Toolbar>

                <Description open={open} setOpen={setOpen} />
            </Container>
        </AppBar>
    )

}