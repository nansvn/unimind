import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { _bookingReview } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import InsightPieChart from './insight-pie-chart';
import InsightBarChart from './insight-bar-chart';
import InsightSuggestion from './insight-suggestion-brief';
import InsightSummaryWidget from './insight-widget-summary';

const TIME_LABELS = {
  week: ['Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat', 'Sun'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  year: ['2018', '2019', '2020', '2021', '2022'],
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
              series: [5, 18, 12, 51, 68, 11, 39, 37, 27, 20],
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
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
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
              series: [20, 41, 63, 33, 28, 35, 50, 46, 11, 26],
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
                    { name: '', data: [2, 2, 1, 2, 1, 4, 2] },
                    { name: '', data: [1, 1, 3, 6, 2, 2, 1] },
                    { name: '', data: [1, 6, 3, 1, 7, 1, 1] },
                    { name: '', data: [3, 2, 4, 7, 8, 9, 8] },
                    { name: '', data: [3, 1, 2, 3, 4, 1, 1] },
                  ],
                },
                {
                  type: 'Month',
                  data: [
                    {
                      name: 'Images',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],
                    },
                    {
                      name: 'Media',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],
                    },
                    {
                      name: 'Documents',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],
                    },
                    {
                      name: 'Other',
                      data: [10, 34, 13, 56, 77, 88, 99, 77, 45, 12, 43, 34],
                    },
                  ],
                },
                {
                  type: 'Year',
                  data: [
                    { name: 'Images', data: [10, 34, 13, 56, 77] },
                    { name: 'Media', data: [10, 34, 13, 56, 77] },
                    { name: 'Documents', data: [10, 34, 13, 56, 77] },
                    { name: 'Other', data: [10, 34, 13, 56, 77] },
                  ],
                },
              ],
            }}
          />
        </Grid>
        <Grid xs={12} md={6} lg={4}>
          <InsightSuggestion
            title="Suggestions"
            subheader={`${_bookingReview.length} Suggestions`}
            list={_bookingReview}
            sx={{ mt: 3 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
