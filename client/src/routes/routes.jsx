import HomePage from '../pages/HomePage';
import PersonDetail from '../pages/PersonDetail';
import MediaSearch from '../pages/MediaSearch';
import MediaDetail from '../pages/MediaDetail';
import MediaList from '../pages/MediaList';
import FavoriteList from '../pages/FavoriteList';
import ReviewList from '../pages/ReviewList';
import PasswordUpdate from '../pages/PasswordUpdate';
import ProtectedPage from '../components/common/ProtectedPage';

export const routesGen = {
  home: '/',
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `${type}/${id}`,
  mediaSearch: '/search',
  person: (id) => `/person/${id}`,
  favoriteList: '/favorite',
  reviewList: '/review',
  passwordUpdate: '/password-update',
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: 'home',
  },
  {
    path: '/person/:personId',
    element: <PersonDetail />,
    state: 'person.detail',
  },
  {
    path: '/search',
    element: <MediaSearch />,
    state: 'search',
  },
  {
    path: 'password-update',
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: 'password.update',
  },
  {
    path: '/favorite',
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: 'favorite',
  },
  {
    path: '/review',
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: 'review',
  },
  {
    path: '/:mediaType',
    element: <MediaList />,
  },
  {
    path: '/:mediaType/:mediaId',
    element: <MediaDetail />,
  },
];

export default routes;
