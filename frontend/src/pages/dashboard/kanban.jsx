import { Helmet } from 'react-helmet-async';

import { KanbanView } from 'src/sections/kanban/kanban-view';

// ----------------------------------------------------------------------

export default function KanbanPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Todo</title>
      </Helmet>

      <KanbanView />
    </>
  );
}
