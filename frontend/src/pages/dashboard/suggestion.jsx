import { Helmet } from 'react-helmet-async';

import SixView from 'src/sections/suggestion/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> UniMind | Suggestion </title>
      </Helmet>

      <SixView />
    </>
  );
}
