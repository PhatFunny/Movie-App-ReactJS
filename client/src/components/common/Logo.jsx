import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      P&E<span style={{ color: theme.palette.primary.main }}>Movie</span>
    </Typography>
  );
};

export default Logo;
