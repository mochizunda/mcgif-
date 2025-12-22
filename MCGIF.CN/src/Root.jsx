import { StrictMode, useMemo } from 'react'
import './index.css'
import App from './App.jsx'
import HeaderBar from './HeaderBar.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footbar from './Footbar'
import './i18n';
import { useTranslation } from 'react-i18next';

function createAppTheme(lang) {
    const isRussian = lang.startsWith('ru');

    return createTheme({
        typography: {
            fontFamily: [
                'Pixel',
                'Roboto',
                'Arial',
                'sans-serif',
            ].join(','),

            body1: {
                fontSize: isRussian ? '1.0rem' : '1.3rem',
            }
        }
    });
}



export default function Root() {
    const { i18n } = useTranslation();

    const theme = useMemo(
        () => createAppTheme(i18n.language),
        [i18n.language]
    );

    return (
    <StrictMode>
        <ThemeProvider theme={theme}>
            <HeaderBar />
            <App theme={theme} />
            <Footbar />
        </ThemeProvider>
        </StrictMode>
    )
}
