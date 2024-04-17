import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import axios, { endpoints } from 'src/utils/axios';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MoodNewEditForm from '../mood-new-edit-form';

// ----------------------------------------------------------------------

export default function MoodEditView({ id }) {
  const settings = useSettingsContext();

  const [currentMood, setCurrentMood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMoodDetail() {
      try {
        const response = await axios.get(endpoints.mood.detail(id));
        setCurrentMood(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchMoodDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading the mood detail: {error.message}</div>;
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Edit"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Mood',
            href: paths.dashboard.mood.root,
          },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <MoodNewEditForm currentMood={currentMood} />
    </Container>
  );
}

MoodEditView.propTypes = {
  id: PropTypes.string,
};
