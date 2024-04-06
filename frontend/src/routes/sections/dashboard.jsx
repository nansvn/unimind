import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthGuard } from 'src/auth/guard';
import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------
// Dashboard
const IndexPage = lazy(() => import('src/pages/dashboard/dashboard'));
const CalendarPage = lazy(() => import('src/pages/dashboard/calendar'));
const InsightPage = lazy(() => import('src/pages/dashboard/insight'));
const SuggestionPage = lazy(() => import('src/pages/dashboard/suggestion'));
const TodoPage = lazy(() => import('src/pages/dashboard/todo'));
// ----------------------------------------------------------------------
// Mood
const JobListPage = lazy(() => import('src/pages/dashboard/mood/list'));
const JobCreatePage = lazy(() => import('src/pages/dashboard/mood/new'));
const JobEditPage = lazy(() => import('src/pages/dashboard/mood/edit'));

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      </AuthGuard>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'dashboard', element: <IndexPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'insight', element: <InsightPage /> },
      { path: 'todo', element: <TodoPage /> },
      { path: 'suggestion', element: <SuggestionPage /> },
      {
        path: 'mood',
        children: [
          { element: <JobListPage />, index: true },
          { path: 'list', element: <JobListPage /> },
          { path: 'new', element: <JobCreatePage /> },
          { path: ':id/edit', element: <JobEditPage /> },
        ],
      },
    ],
  },
];
