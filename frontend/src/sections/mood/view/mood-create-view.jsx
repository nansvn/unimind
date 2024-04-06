import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import MoodNewEditForm from '../mood-new-edit-form';

// ----------------------------------------------------------------------

export default function MoodCreateView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <CustomBreadcrumbs
        heading="How do you feel today?"
        links={[
          {
            name: 'Dashboard',
            href: paths.dashboard.root,
          },
          {
            name: 'Mood',
            href: paths.dashboard.mood.root,
          },
          { name: 'New mood' },
        ]}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      />

      <MoodNewEditForm />
    </Container>
  );
}
