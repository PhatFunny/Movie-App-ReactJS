import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import tmdbConfig from '../../api/configs/tmdb.config';
import AutoSwiper from './AutoSwiper';

const PosterSlide = ({ posters }) => {
  return (
    <AutoSwiper>
      {[...posters].splice(0, 10).map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              padding: '60%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundImage: `url(${tmdbConfig.posterPath(
                item.file_path
              )})`,
            }}
          />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default PosterSlide;
