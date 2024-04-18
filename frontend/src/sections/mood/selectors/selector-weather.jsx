import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function WeatherOptions({ weather, onChangeWeather }) {
  const handleWeatherChange = (event, newWeather) => {
    if (newWeather !== null) {
      onChangeWeather(newWeather); // Use onChange from props
    }
  };

  const buttonStyle = {
    borderRadius: '50% !important',
    backgroundColor: '#637A9F',
    margin: '10px!important',
    '&.Mui-selected': {
      backgroundColor: '#ffe188a6 !important',
    },
    '&.MuiToggleButton-root': {
      border: 'none',
      overflow: 'hidden',
    },
  };

  return (
    <>
      <Typography variant="subtitle2">What was the weather like?</Typography>
      <Grid sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup
          value={weather}
          exclusive
          onChange={handleWeatherChange}
          aria-label="weather"
          sx={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <ToggleButton value="Sunny" aria-label="Sunny" sx={buttonStyle}>
            <Iconify width={36} icon="meteocons:sunset" />
          </ToggleButton>
          <ToggleButton value="Rainy" aria-label="Rainy" sx={buttonStyle}>
            <Iconify width={36} icon="twemoji:cloud-with-rain" />
          </ToggleButton>
          <ToggleButton value="Windy" aria-label="Windy" sx={buttonStyle}>
            <Iconify width={36} icon="fluent-emoji:leaf-fluttering-in-wind" />
          </ToggleButton>
          <ToggleButton value="Cloudy" aria-label="Cloudy" sx={buttonStyle}>
            <Iconify width={36} icon="emojione-v1:cloud" />
          </ToggleButton>
          <ToggleButton value="Thunder" aria-label="Thunder" sx={buttonStyle}>
            <Iconify width={36} icon="meteocons:thunderstorms-day-fill" sx={{ color: '#64b0f7' }} />
          </ToggleButton>
          <ToggleButton value="Rainbow" aria-label="Rainbow" sx={buttonStyle}>
            <Iconify width={36} icon="noto:rainbow" sx={{ color: '#64b0f7' }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
}

WeatherOptions.propTypes = {
  weather: PropTypes.string,
  onChangeWeather: PropTypes.func.isRequired,
};
