import React from 'react';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // For sunny
import { Grid, ToggleButtonGroup, ToggleButton, Stack } from '@mui/material';

const HealthOptions = () => {
  const [activities, setActivities] = React.useState([]);

  const handleActivitiesChange = (event, newActivities) => {
    setActivities(newActivities);
  };

  return (
    <>
      <Grid spacing={2} sx={{ alignSelf: 'center' }}>
        <Typography variant="subtitle2">Health</Typography>
        <ToggleButtonGroup
          value={activities}
          onChange={handleActivitiesChange}
          aria-label="activities"
        >
          <ToggleButton value="running" aria-label="running">
            <WbSunnyIcon color="success" />
          </ToggleButton>
          <ToggleButton value="reading" aria-label="reading">
            <WbSunnyIcon color="success" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
};
export default HealthOptions;
