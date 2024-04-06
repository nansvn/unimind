import { Helmet } from 'react-helmet-async';

import MoodCreateView from 'src/sections/mood/view/mood-create-view';

// ----------------------------------------------------------------------

export default function MoodCreatePage() {
  return (
    <>
      <Helmet>
        <title> UniMind | Create New Mood </title>
      </Helmet>

      <MoodCreateView />
    </>
  );
}
