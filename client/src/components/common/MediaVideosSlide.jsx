import { Box } from "@mui/material";
import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import tmdbConfig from '../../api/configs/tmdb.config';
import NavigationSwiper from "./NavigationSwiper";

const MediaVideo = ({ video }) => {
  const iframeRef = useRef();

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
    iframeRef.current.setAttribute('height', height)
  }, [])

  return (
    <Box sx={{ height: 'max-content' }}>
      <iframe
        key={video.key}
        src={tmdbConfig.youtubePath(video.key)}
        ref={iframeRef}
        width='100%'
        title={video.id}
        style={{ border: 0 }}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
}

const MediaVideosSlide = ({ videos }) => {
  return (
    <NavigationSwiper>
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <MediaVideo video={video} />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
}

export default MediaVideosSlide;
