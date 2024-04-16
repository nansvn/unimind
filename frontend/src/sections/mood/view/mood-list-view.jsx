import orderBy from 'lodash/orderBy';
import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useAuthContext } from 'src/auth/hooks';
import { _jobs, MOOD_SORT_OPTIONS } from 'src/_mock';

import Iconify from 'src/components/iconify';
import EmptyContent from 'src/components/empty-content';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MoodList from '../mood-list';
import MoodSort from '../mood-sort';

// ----------------------------------------------------------------------
export default function MoodListView() {
  const { user } = useAuthContext();
  const settings = useSettingsContext();

  const [sortBy, setSortBy] = useState('latest');

  const dataFiltered = applyFilter({
    inputData: _jobs,
    sortBy,
  });

  const notFound = !dataFiltered.length;

  const handleSortBy = useCallback((newValue) => {
    setSortBy(newValue);
  }, []);

  const renderFilters = (
    <Stack
      spacing={3}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-end', sm: 'center' }}
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Stack direction="row" spacing={1} flexShrink={0}>
        <MoodSort sort={sortBy} onSort={handleSortBy} sortOptions={MOOD_SORT_OPTIONS} />
      </Stack>
    </Stack>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="Past Records"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          {
            name: 'Mood',
            href: paths.dashboard.mood.root,
          },
          { name: 'View' },
        ]}
        action={
          <Button
            component={RouterLink}
            href={paths.dashboard.mood.new}
            variant="contained"
            color="primary"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New
          </Button>
        }
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        {renderFilters}
      </Stack>

      {notFound && <EmptyContent filled title="No Data" sx={{ py: 10 }} />}

      <MoodList userId={user._id} />
    </Container>
  );
}

// ----------------------------------------------------------------------
const applyFilter = ({ inputData, sortBy }) => {
  // SORT BY
  if (sortBy === 'latest') {
    inputData = orderBy(inputData, ['createdAt'], ['desc']);
  }

  if (sortBy === 'oldest') {
    inputData = orderBy(inputData, ['createdAt'], ['asc']);
  }

  return inputData;
};
