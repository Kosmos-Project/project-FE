import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout/SidebarLayout';
import BaseLayout from 'src/layouts/Base/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import Login from './pages/Login';
import SignUp from './pages/Signup';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// Pages

const Overview = Loader(lazy(() => import('src/pages/overview')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/pages/dashboards/Crypto')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/pages/applications/Messenger'))
);
const Transactions = Loader(
  lazy(() => import('src/pages/applications/Transactions'))
);
const UserProfile = Loader(
  lazy(() => import('src/pages/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/pages/applications/Users/settings'))
);

// Components

const Modals = Loader(lazy(() => import('src/pages/pages/Components/Modals')));
const Accordions = Loader(
  lazy(() => import('src/pages/pages/Components/Accordions'))
);
const Avatars = Loader(
  lazy(() => import('src/pages/pages/Components/Avatars'))
);
const Cards = Loader(lazy(() => import('src/pages/pages/Components/Cards')));
const Forms = Loader(lazy(() => import('src/pages/pages/Components/Forms')));

// 로그인, 회원가입도 추후에 lazy 사용하기
// Status

const Status404 = Loader(
  lazy(() => import('src/pages/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/pages/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/pages/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/pages/pages/Status/Maintenance'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: 'components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  }
];

export default routes;
