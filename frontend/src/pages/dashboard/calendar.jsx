import { Helmet } from 'react-helmet-async';

import CalendarView from 'src/sections/calendar/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> UniMind | Calendar</title>
      </Helmet>

      <CalendarView />
    </>
  );
}
