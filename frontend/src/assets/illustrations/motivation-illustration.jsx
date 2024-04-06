import { memo } from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

function MotivationIllustration({ ...other }) {
  const theme = useTheme();

  const PRIMARY_LIGHTER = theme.palette.primary.lighter;

  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <image
        href="https://github.com/nansvn/Assets/blob/main/Assets/images/background2.png?raw=true"
        height="450"
        x="0"
        y="30"
      />

      <defs>
        <linearGradient
          id="paint0_linear_1_43"
          x1="140"
          x2="276.5"
          y1="98"
          y2="312.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={PRIMARY_LIGHTER} />
          <stop offset="1" stopColor={PRIMARY_DARK} />
        </linearGradient>
      </defs>
    </Box>
  );
}

export default memo(MotivationIllustration);
