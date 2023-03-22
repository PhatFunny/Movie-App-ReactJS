import HomeOutlinedIcon from '@mui/icons-material/Home';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import LiveTvOutLinedIcon from '@mui/icons-material/LiveTvOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const main = [
  {
    display: 'home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    state: 'home'
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <SlideshowOutlinedIcon />,
    state: 'movie'
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutLinedIcon />,
    state: 'tv'
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlinedIcon />,
    state: 'search'
  },
];

const user = [
  {
    display: 'favorite',
    path: '/favorite',
    icon: <FavoriteBorderOutlinedIcon />,
    state: 'favorite'
  },
  {
    display: 'review',
    path: '/review',
    icon: <RateReviewOutlinedIcon />,
    state: 'review'
  },
  {
    display: 'password update',
    path: '/password-update',
    icon: <LockResetOutlinedIcon />,
    state: 'password.update'
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
