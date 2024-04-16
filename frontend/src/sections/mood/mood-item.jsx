import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { subIcons } from 'src/_mock/_mood';

import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function MoodItem({ record, onEdit, onDelete }) {
  const popover = usePopover();
  const { _id, mood, tags, comment, createdAt } = record;

  const [imageUrl, setImageUrl] = useState('');

  const formattedCreatedAt = moment(createdAt).format('MMMM D, YYYY, h:mm A');

  useEffect(() => {
    if (mood) {
      setImageUrl(subIcons[mood]);
    }
  }, [mood]);

  return (
    <>
      <Card>
        <IconButton onClick={popover.onOpen} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>

        <Stack sx={{ p: 3, pb: 1 }}>
          <Avatar
            alt={mood}
            src={imageUrl}
            variant="rounded"
            sx={{ width: 52, height: 52, mb: 2 }}
          />

          <Stack
            spacing={1}
            direction="row"
            alignItems="center"
            sx={{ color: 'primary.main', typography: 'caption' }}
          >
            <Iconify width={16} icon="clarity:date-line" />
            Time: {formattedCreatedAt}
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box rowGap={1} display="grid" gridTemplateColumns="repeat(1, 1fr)" sx={{ p: 2 }}>
          {[
            {
              icon: (
                <Iconify
                  width={16}
                  icon="fluent-emoji-flat:keycap-hashtag"
                  sx={{ flexShrink: 0 }}
                />
              ),
              id: _id,
            },
          ].map((item) => (
            <Stack
              key={item.id}
              spacing={0.5}
              flexShrink={0}
              direction="row"
              alignItems="center"
              sx={{ color: 'text.disabled', minWidth: 0 }}
            >
              {item.icon}
              <Typography variant="caption" noWrap>
                {tags.join(', ')}
              </Typography>
            </Stack>
          ))}
          {[
            {
              icon: <Iconify width={16} icon="fxemoji:note" sx={{ flexShrink: 0 }} />,
              id: _id,
            },
          ].map((item) => (
            <Stack
              key={item.id}
              spacing={0.5}
              flexShrink={0}
              direction="row"
              alignItems="center"
              sx={{ color: 'text.disabled', minWidth: 0 }}
            >
              {item.icon}
              <Typography variant="caption" noWrap>
                {comment}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Card>

      <CustomPopover
        open={popover.open}
        onClose={popover.onClose}
        arrow="right-top"
        sx={{ width: 140 }}
      >
        <MenuItem
          onClick={() => {
            popover.onClose();
            onEdit();
          }}
        >
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <MenuItem
          onClick={() => {
            popover.onClose();
            onDelete();
          }}
          sx={{ color: 'error.main' }}
        >
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}

MoodItem.propTypes = {
  record: PropTypes.object,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};
