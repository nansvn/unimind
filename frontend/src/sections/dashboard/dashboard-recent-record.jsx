import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { paths } from 'src/routes/paths';

import { fToNow } from 'src/utils/format-time';
import axios, { endpoints } from 'src/utils/axios';

import { subIcons } from 'src/_mock/_mood';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

// ----------------------------------------------------------------------
export default function RecentRecord({ title, userId, ...other }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoints.mood.list(userId));
        setData(response.data);
      } catch (err) {
        setError(err.toString());
      }
    };
    fetchData();
  }, [userId]);

  if (error) return <div>{error}</div>;

  return (
    <Card {...other}>
      <CardHeader title={title} sx={{ mb: 1 }} />

      <Scrollbar>
        {data.slice(0, 5).map((record) => (
          <RecordItem key={record._id} record={record} />
        ))}
      </Scrollbar>

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon="eva:arrow-ios-forward-fill" width={18} sx={{ ml: -0.5 }} />}
          component={Link}
          to={paths.dashboard.mood.root}
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}

RecentRecord.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------
function RecordItem({ record }) {
  const { mood, comment, updatedAt } = record;

  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (mood) {
      setImageUrl(subIcons[mood]);
    }
  }, [mood]);

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        py: 2,
        px: 3,
        minWidth: 600,
        borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
      }}
    >
      <Avatar
        variant="rounded"
        alt={mood}
        src={imageUrl}
        sx={{ width: 50, height: 50, flexShrink: 0 }}
      />
      <ListItemText
        secondary={comment}
        secondaryTypographyProps={{
          mt: 0.5,
          noWrap: true,
          component: 'span',
        }}
      />
      <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
        {fToNow(updatedAt)}
      </Box>{' '}
    </Stack>
  );
}

RecordItem.propTypes = {
  record: PropTypes.object,
};
