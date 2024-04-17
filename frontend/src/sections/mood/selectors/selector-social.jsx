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
          <ToggleButton value="running" aria-label="running" sx={buttonStyle}>
            <Iconify width={48} icon="emojione:couple-with-heart" />
          </ToggleButton>
          <ToggleButton value="reading" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="emojione:anger-symbol" />
          </ToggleButton>
          <ToggleButton value="f" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="emojione:man-dancing" />
          </ToggleButton>
          <ToggleButton value="s" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="fluent-emoji-flat:broken-heart" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="fluent-emoji-flat:cat" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="fluent-emoji-flat:confetti-ball" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading" sx={buttonStyle}>
            <Iconify width={48} icon="fluent-emoji-flat:clapping-hands" />
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
