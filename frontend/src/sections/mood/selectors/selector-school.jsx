import React from 'react';
import Iconify from 'src/components/iconify';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { ToggleButtonGroup, ToggleButton, Grid } from '@mui/material';

export default function SchoolOptions({ school, onChangeSchool }) {
  const handleSchoolChange = (event, newSchool) => {
    if (newSchool !== null) {
      onChangeSchool(newSchool); // Corrected to use onChangeSchool
    }
  };

  return (
    <>
      <Typography variant="subtitle2">School</Typography>
      <Grid spacing={2} sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup value={school} onChange={handleSchoolChange} aria-label="school">
          <ToggleButton value="writing" aria-label="writing">
            <Iconify width={48} icon="arcticons:writeilypro" sx={{ color: '#64b0f7' }} />
          </ToggleButton>
          <ToggleButton value="assignment" aria-label="assignment">
            <Iconify
              width={48}
              icon="healthicons:i-exam-multiple-choice-outline"
              sx={{ color: '#a0648a' }}
            />
          </ToggleButton>
          <ToggleButton value="lab" aria-label="lab">
            <Iconify width={48} icon="ph:test-tube-light" sx={{ color: '#a9b361' }} />
          </ToggleButton>
          <ToggleButton value="gym" aria-label="gym">
            <Iconify width={48} icon="tabler:gymnastics" sx={{ color: '#f79764' }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
}
SchoolOptions.propTypes = {
  school: PropTypes.string,
  onChangeSchool: PropTypes.func.isRequired,
};
