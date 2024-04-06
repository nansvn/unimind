import React, { useState } from 'react';

import { Grid, Button } from '@mui/material';

const EmojiSelector = () => {
  // Main emoji options
  const mainEmojis = ['😀', '😅', '🤣'];
  // Sub emoji options based on main emoji selection
  const subemojis = {
    '😀': ['😍', '😎', '😤', '😥'],
    '😅': ['😮', '😴', '😛', '😜'],
    '🤣': ['🤔', '🤗', '🤭', '🤫'],
  };

  const [selectedMainEmoji, setSelectedMainEmoji] = useState('');
  const [selectedSubEmoji, setSelectedSubEmoji] = useState('');

  const handleMainEmojiClick = (emoji) => {
    setSelectedMainEmoji(emoji);
    // Reset sub-emoji selection upon selecting a new main emoji
    setSelectedSubEmoji('');
  };

  const handleSubEmojiClick = (emoji) => {
    setSelectedSubEmoji(emoji);
  };

  const handleSubmit = () => {
    console.log('Selected Sub Emoji:', selectedSubEmoji);
    // Here you would typically store the selectedSubEmoji to your backend or state management solution
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {mainEmojis.map((emoji) => (
          <Button key={emoji} onClick={() => handleMainEmojiClick(emoji)}>
            {emoji}
          </Button>
        ))}
      </Grid>
      {selectedMainEmoji && (
        <Grid item xs={12}>
          {subemojis[selectedMainEmoji].map((emoji) => (
            <Button
              key={emoji}
              onClick={() => handleSubEmojiClick(emoji)}
              variant={selectedSubEmoji === emoji ? 'contained' : 'text'}
            >
              {emoji}
            </Button>
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!selectedSubEmoji}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default EmojiSelector;
