// ----------------------------------------------------------------------

import { _id } from 'src/_mock/assets';

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

const MOCK_ID = _id[1];

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    dashboard: `${ROOTS.DASHBOARD}/dashboard`,
    calendar: `${ROOTS.DASHBOARD}/calendar`,
    todo: `${ROOTS.DASHBOARD}/todo`,
    insight: `${ROOTS.DASHBOARD}/insight`,
    suggestion: `${ROOTS.DASHBOARD}/suggestion`,
    // MOOD
    mood: {
      root: `${ROOTS.DASHBOARD}/mood`,
      new: `${ROOTS.DASHBOARD}/mood/new`,
      edit: (id) => `${ROOTS.DASHBOARD}/mood/${id}/edit`,
      demo: {
        edit: `${ROOTS.DASHBOARD}/mood/${MOCK_ID}/edit`,
      },
    },
  },
  //
};
