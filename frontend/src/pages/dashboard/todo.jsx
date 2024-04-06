import { Helmet } from 'react-helmet-async';

import KanbanView from 'src/sections/kanban/kanban-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> UniMind | Todo </title>
      </Helmet>

      <KanbanView />
    </>
  );
}
