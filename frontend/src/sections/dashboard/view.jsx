import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { paths } from 'src/routes/paths';

import { _analyticTasks } from 'src/_mock';
import { useAuthContext } from 'src/auth/hooks';
import { MotivationIllustration } from 'src/assets/illustrations';

import { useSettingsContext } from 'src/components/settings';

import Tasks from './dashboard-tasks';
import Welcome from './dashboard-welcome';
import AppWidget from './dashboard-widget';
import Weather from './dashboard-widget-weather';
import RecentRecord from './dashboard-recent-record';

// ----------------------------------------------------------------------

export default function OverviewEcommerceView() {
  const { user } = useAuthContext();
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Welcome
            title={`Welcome back🍀 \n ${user?.firstname}`}
            description="Use this platform to record your daily activities and track your progress."
            img={<MotivationIllustration />}
            action={
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to={paths.dashboard.mood.new}
              >
                Create New
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <Stack spacing="1">
            <Weather title="Weather" />
            <AppWidget
              title="for this semester"
              total={26}
              icon="solar:user-rounded-bold"
              chart={{
                series: 78,
              }}
            />
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <RecentRecord title="Most Recent" userId={user?._id} />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Tasks title="Tasks" list={_analyticTasks} />
        </Grid>
      </Grid>
    </Container>
  );
}
