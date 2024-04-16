import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function SchoolOptions({ school, onChangeSchool }) {
  const handleSchoolChange = (event, newSchool) => {
    if (newSchool !== null) {
      onChangeSchool(newSchool); // Corrected to use onChangeSchool
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
      <Typography variant="subtitle2">School</Typography>
      <Grid sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup
          value={school}
          onChange={handleSchoolChange}
          aria-label="school"
          sx={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <ToggleButton value="writing" aria-label="writing" sx={buttonStyle}>
            <Iconify width={48} icon="arcticons:writeilypro" sx={{ color: '#64b0f7' }} />
          </ToggleButton>
          <ToggleButton value="assignment" aria-label="assignment" sx={buttonStyle}>
            <Iconify
              width={48}
              icon="healthicons:i-exam-multiple-choice-outline"
              sx={{ color: '#a0648a' }}
            />
          </ToggleButton>
          <ToggleButton value="lab" aria-label="lab" sx={buttonStyle}>
            <Iconify width={48} icon="ph:test-tube-light" sx={{ color: '#a9b361' }} />
          </ToggleButton>
          <ToggleButton value="gym" aria-label="gym" sx={buttonStyle}>
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
