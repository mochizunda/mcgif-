import { Grid, Stack, Radio, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next';

export default function ContentOption({ value, current, setValue }) {
    let properties = {
        borderRadius: 2,
        border: 2,
        borderColor: '#B0B0FF',
        p: 1,
        maxWidth: 0.15
    }
    const { t } = useTranslation();

    if (value.name === current) {
        properties.boxShadow = 2,
            properties.backgroundColor = '#E0E0FF'
    }

    return (
        <Stack sx={properties} onClick={() => setValue(value)}>
            <Radio
                checked={current === value.name}
                onChange={() => setValue(value)}
                value={value.name}
                name="radio-buttons"
                inputProps={{ 'aria-label': value.name }} />
            <img src={value.img} alt={t(`gen.${value.name}`)} style={{ width: '100%' }} />
            <Typography variant='h5' sx={{ my: 2 }} >
                {t(`gen.${value.name}`)}
            </Typography>
        </Stack>
    )
}