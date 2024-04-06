import { Helmet } from 'react-helmet-async';

import InsightView from 'src/sections/insight/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> UniMind | Insight </title>
      </Helmet>

      <InsightView />
    </>
  );
}
