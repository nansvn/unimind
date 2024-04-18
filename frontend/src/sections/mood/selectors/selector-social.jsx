import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function SocialOptions({ social, onChangeSocial }) {
  const handleSocialChange = (event, newSocial) => {
    if (newSocial !== null) {
      onChangeSocial(newSocial);
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
      <Typography variant="subtitle2">Social</Typography>
      <Grid sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup
          value={social}
          onChange={handleSocialChange}
          aria-label="social"
          sx={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <ToggleButton value="romantic" aria-label="romantic" sx={buttonStyle}>
            <Iconify width={32} icon="emojione:couple-with-heart" />
          </ToggleButton>
          <ToggleButton value="family" aria-label="family" sx={buttonStyle}>
            <Iconify width={32} icon="emojione:family" />
          </ToggleButton>
          <ToggleButton value="fight" aria-label="fight" sx={buttonStyle}>
            <Iconify width={32} icon="emojione:anger-symbol" />
          </ToggleButton>
          <ToggleButton value="heartbroken" aria-label="heartbroken" sx={buttonStyle}>
            <Iconify width={32} icon="fluent-emoji-flat:broken-heart" />
          </ToggleButton>
          <ToggleButton value="pet" aria-label="pet" sx={buttonStyle}>
            <Iconify width={32} icon="fluent-emoji-flat:cat" />
          </ToggleButton>
          <ToggleButton value="event" aria-label="event" sx={buttonStyle}>
            <Iconify width={32} icon="fluent-emoji-flat:confetti-ball" />
          </ToggleButton>
          <ToggleButton value="self" aria-label="self" sx={buttonStyle}>
            <Iconify width={32} icon="emojione:selfie-medium-skin-tone" />
          </ToggleButton>
          <ToggleButton value="party" aria-label="party" sx={buttonStyle}>
            <Iconify width={32} icon="emojione:tropical-drink" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
}
SocialOptions.propTypes = {
  social: PropTypes.array,
  onChangeSocial: PropTypes.func.isRequired,
};
