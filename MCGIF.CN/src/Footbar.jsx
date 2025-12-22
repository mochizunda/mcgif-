import { AppBar, Container, Toolbar, Stack, Typography, Link, Divider } from '@mui/material'
import { useTranslation } from 'react-i18next';

function Bar({ middle = false }) {
    return <Divider orientation="vertical" variant={middle ? "middle" : ""} flexItem sx={{ mx: 1, borderRightWidth: 1, bgcolor: '#000000' }} />;
}

function TextButton({ children, onClick }) {
    return <Typography sx={{ "&:hover": { textDecoration: "underline" } }} style={{ cursor: 'pointer' }} onClick={onClick}>{children}</Typography>;
}

export default function FootBar() {
    const { t } = useTranslation();

    function AayongClicked() {
        navigator.clipboard.writeText("599005767").then(() => {
            alert(t("footer.aayong"));
        })
    }

    function OFTSClicked() {
        navigator.clipboard.writeText("qianmuchen.sam@gmail.com").then(() => {
            alert(t("footer.ofts"));
        });
    }

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
                    <Stack alignItems="center" sx={{
                        width: '100%',
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                width: '100%', justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Link href="https://mccag.cn" style={{ fontSize: "1.3rem" }} color="inherit" underline="none">{t("footer.friend")}</Link>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                width: '100%', justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Typography>{t("footer.dev")}</Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            sx={{
                                width: '100%', justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Typography >{t("footer.contact")}</Typography>
                            <TextButton onClick={AayongClicked}>Aayong</TextButton>
                            <Bar middle={true} />
                            <TextButton onClick={OFTSClicked}>OFTS_CQM</TextButton>
                        </Stack>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}