import { Helmet } from 'react-helmet-async';

import MoodListView from 'src/sections/mood/view/mood-list-view';

// ----------------------------------------------------------------------

export default function MoodListPage() {
  return (
    <>
      <Helmet>
        <title> UniMind | View Records </title>
      </Helmet>

      <MoodListView />
    </>
  );
}
