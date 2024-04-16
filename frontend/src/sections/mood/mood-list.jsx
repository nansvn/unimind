import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import axios, { endpoints } from 'src/utils/axios';

import MoodItem from './mood-item';

// ----------------------------------------------------------------------

export default function MoodList({ userId }) {
  const router = useRouter();

  const handleEdit = useCallback(
    (id) => {
      router.push(paths.dashboard.mood.edit(id));
    },
    [router]
  );

  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete(endpoints.mood.delete(id));
      setData((prevData) => prevData.filter((mood) => mood._id !== id));
    } catch (err) {
      console.error(err);
    }
  }, []);

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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {data.map((record) => (
          <MoodItem
            key={record._id}
            record={record}
            onEdit={() => handleEdit(record._id)}
            onDelete={() => handleDelete(record._id)}
          />
        ))}
      </Box>

      {data.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )}
    </>
  );
}

MoodList.propTypes = {
  userId: PropTypes.string,
};
