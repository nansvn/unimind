import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        items: [
          { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
          {
            title: 'Mood',
            path: paths.dashboard.mood.root,
            icon: ICONS.job,
            children: [
              { title: 'View', path: paths.dashboard.mood.root },
              { title: 'Add New', path: paths.dashboard.mood.new },
            ],
          },
          { title: 'Calendar', path: paths.dashboard.calendar, icon: ICONS.calendar },
          { title: 'Todo', path: paths.dashboard.todo, icon: ICONS.menuItem },
          { title: 'Insight', path: paths.dashboard.insight, icon: ICONS.analytics },
          { title: 'Suggestion', path: paths.dashboard.suggestion, icon: ICONS.chat },
        ],
      },
    ],
    []
  );

  return data;
}
