import { LoadingButton } from '@mui/lab';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import Container from './Container';
import reviewApi from '../../api/modules/review.api';

const ReviewItemm = ({ review, onRemoved }) => {
  const { user } = useSelector((state) => state.user);

  const [onRequest, setOnRequest] = useState(false);

  const onRemove = async() => {
    if (onRequest) return;
    setOnRequest(true);

    const { response, err } = await reviewApi.remove({reviewId: review.id});

    if (err) toast.error(err.message);
    if (response) onRemoved(review.id);
  }

  return (
    <Box sx={{
      padding: 2,
      borderRadius: '5px',
      position: 'relative',
      opacity: onRequest ? 0.6 : 1,
      '&:hover': { backgroundColor: 'background.paper' }
    }}>
      <Stack direction='row' spacing={2}>
        {/* avatar */}
        {/* avatar */}
        <Stack spacing={2} flexGrow={1}>
          <Stack spacing={1}>
            <Typography vaaiant='h6' fontWeight='700'>
              {review.user.displayName}
            </Typography>
            <Typography variant='caption'>
              {dayjs(review.createAt).format('DD-MM-YYYY HH:mm:ss')}
            </Typography>
          </Stack>
          <Typography variant='body1' textAlign='justify'>
            {review.content}
          </Typography>
          {user && user.id === review.user.id && (
            <LoadingButton
              variant='contained'
              startIcon={<DeleteIcon />}
              loadingPosition='start'
              loading={onRequest}
              onClick={onRemove}
              sx={{
                position: { xs: 2, md: 0 },
                right: { xs: 0, md: '10px' },
                marginTop: { xs: 2, md: 0 },
                width: 'max-content'
              }}
            >
              Remove
            </LoadingButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
