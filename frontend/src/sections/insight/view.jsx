import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { useSettingsContext } from 'src/components/settings';

import InsightPieChart from './insight-pie-chart';
import InsightBarChart from './insight-bar-chart';
import InsightSummaryWidget from './insight-widget-summary';

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2022', '2023', '2024', '2025', '2026'],
};
// ----------------------------------------------------------------------

export default function OverviewAppView() {
  const theme = useTheme();

  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4}>
          <InsightSummaryWidget
            title="Total Moods Recorded"
            percent={12}
            total={12}
            chart={{
              series: [5, 18, 12, 21, 18, 11, 15, 30, 6, 20],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <InsightSummaryWidget
            title="Total Events"
            percent={15}
            total={10}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 21, 33, 13, 8, 15, 5, 7, 11, 26],
            }}
          />
        </Grid>
        <Grid xs={12} md={4}>
          <InsightSummaryWidget
            title="Total Tasks Completed"
            percent={20}
            total={25}
            chart={{
              colors: [theme.palette.info.light, theme.palette.info.main],
              series: [20, 21, 1, 3, 8, 5, 5, 6, 11, 6],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <InsightPieChart
            title="Mood Records"
            chart={{
              series: [
                { label: '', value: 12 },
                { label: '', value: 3 },
                { label: '', value: 13 },
                { label: '', value: 7 },
                { label: '', value: 8 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <InsightBarChart
            title="Mood Activity"
            chart={{
              labels: TIME_LABELS,
              colors: [
                theme.palette.primary.main,
                theme.palette.error.main,
                theme.palette.warning.main,
                theme.palette.info.main,
                theme.palette.text.disabled,
              ],
              series: [
                {
                  type: 'Week',
                  data: [
                    { name: '', data: [0, 0, 1, 2, 1, 0, 0] },
                    { name: '', data: [2, 1, 0, 0, 2, 0, 1] },
                    { name: '', data: [0, 0, 0, 1, 1, 1, 1] },
                    { name: '', data: [1, 2, 1, 2, 0, 2, 0] },
                    { name: '', data: [0, 1, 0, 0, 1, 1, 1] },
                  ],
                },
                {
                  type: 'Month',
                  data: [
                    {
                      name: '',
                      data: [1, 4, 3, 5, 2, 3, 2, 2, 1, 2, 3, 2],
                    },
                    {
                      name: '',
                      data: [0, 4, 2, 1, 1, 2, 5, 2, 4, 2, 3, 4],
                    },
                    {
                      name: '',
                      data: [0, 4, 3, 4, 2, 3, 5, 2, 4, 2, 3, 1],
                    },
                    {
                      name: '',
                      data: [0, 2, 3, 1, 2, 2, 5, 2, 4, 2, 3, 2],
                    },
                  ],
                },
                {
                  type: 'Year',
                  data: [
                    { name: '', data: [10, 9, 13, 6, 2] },
                    { name: '', data: [10, 9, 13, 6, 2] },
                    { name: '', data: [10, 9, 13, 6, 2] },
                    { name: '', data: [10, 9, 13, 6, 2] },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
