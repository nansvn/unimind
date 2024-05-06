import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Box, Card, Typography } from '@mui/material';

export default function Weather({ title, sx, ...other }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    const apiKey = '89f83c2e02dd0326fd2280437b947724';
    // You can replace 'London' with any city name or use geolocation API for dynamic location
    const city = 'Limerick';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setWeatherData({
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
        });
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <Card sx={{ mb: 2, ...sx }} {...other}>
      <Typography variant="h5" sx={{ px: 3, mt: 2 }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 1,
          alignItems: 'center', // Ensures vertical center alignment
          backgroundColor: 'background.paper', // Use theme for consistent background
          borderRadius: '8px', // Optional: adds rounded corners
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: adds subtle shadow
        }}
      >
        {weatherData ? (
          <>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} // Use higher resolution
              alt={weatherData.description}
              style={{
                width: 85,
                height: 85,
                marginRight: '20px',
                filter: 'drop-shadow(0px 0px 3px rgba(0,0,0,0.3))', // Adds shadow to the icon for depth
              }}
            />
            <Typography variant="h3">{`${weatherData.temp.toFixed(1)}°C`}</Typography>
          </>
        ) : (
          <Typography variant="h3">Loading weather...</Typography>
        )}
      </Box>
    </Card>
  );
}

Weather.propTypes = {
  percent: PropTypes.number,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
