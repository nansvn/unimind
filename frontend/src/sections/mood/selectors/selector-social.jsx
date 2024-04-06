import React from 'react';
import PropTypes from 'prop-types';
import Iconify from 'src/components/iconify';
import Typography from '@mui/material/Typography';
import { Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';

export default function SocialOptions({ social, onChangeSocial }) {
  const handleSocialChange = (event, newSocial) => {
    if (newSocial !== null) {
      onChangeSocial(newSocial);
    }
  };

  return (
    <>
      <Typography variant="subtitle2">Social</Typography>
      <Grid spacing={2} sx={{ alignSelf: 'center' }}>
        <ToggleButtonGroup value={social} onChange={handleSocialChange} aria-label="social">
          <ToggleButton value="running" aria-label="running">
            <Iconify width={48} icon="emojione:couple-with-heart" />
          </ToggleButton>
          <ToggleButton value="reading" aria-label="reading">
            <Iconify width={48} icon="emojione:anger-symbol" />
          </ToggleButton>
          <ToggleButton value="f" aria-label="reading">
            <Iconify width={48} icon="emojione:man-dancing" />
          </ToggleButton>
          <ToggleButton value="s" aria-label="reading">
            <Iconify width={48} icon="fluent-emoji-flat:broken-heart" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading">
            <Iconify width={48} icon="fluent-emoji-flat:cat" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading">
            <Iconify width={48} icon="fluent-emoji-flat:confetti-ball" />
          </ToggleButton>
          <ToggleButton value="a" aria-label="reading">
            <Iconify width={48} icon="fluent-emoji-flat:clapping-hands" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </>
  );
}
SocialOptions.propTypes = {
  social: PropTypes.string,
  onChangeSocial: PropTypes.func.isRequired,
};
