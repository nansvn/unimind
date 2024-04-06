import { Helmet } from 'react-helmet-async';

import { useParams } from 'src/routes/hooks';

import MoodEditView from 'src/sections/mood/view/mood-edit-view';

// ----------------------------------------------------------------------

export default function MoodEditPage() {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <Helmet>
        <title> UniMind | Edit My Mood </title>
      </Helmet>

      <MoodEditView id={`${id}`} />
    </>
  );
}
