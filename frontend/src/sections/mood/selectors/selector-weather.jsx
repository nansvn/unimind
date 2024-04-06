import React from 'react';

import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Grid, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Iconify from 'src/components/iconify';

export default function WeatherOptions({ weather, onChangeWeather }) {
  const handleWeatherChange = (event, newWeather) => {
    if (newWeather !== null) {
      onChangeWeather(newWeather); // Use onChange from props
    }
  };

  return (
    <>
      <Typography variant="subtitle2">What was the weather like?</Typography>
      <Grid spacing={2} sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup
          value={weather} // Use value from props
          exclusive
          onChange={handleWeatherChange}
          aria-label="weather"
        >
          <ToggleButton value="sunny" aria-label="sunny">
            <Iconify width={48} icon="meteocons:sunset" />
          </ToggleButton>
          <ToggleButton value="cloudy" aria-label="rainy">
            <Iconify width={48} icon="meteocons:partly-cloudy-night-drizzle-fill" />
          </ToggleButton>
          <ToggleButton value="rainy" aria-label="windy">
            <Iconify width={48} icon="fluent-emoji:leaf-fluttering-in-wind" />
          </ToggleButton>
          <ToggleButton value="ranbow" aria-label="cloudy">
            <Iconify width={48} icon="meteocons:rainbow-clear" />
          </ToggleButton>
          <ToggleButton value="ranbow" aria-label="thunder">
            <Iconify width={48} icon="meteocons:thunderstorms-day-fill" sx={{ color: '#64b0f7' }} />
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
