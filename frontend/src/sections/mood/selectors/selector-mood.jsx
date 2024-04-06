import PropTypes from 'prop-types';
import { Grid, Stack, Button, Typography } from '@mui/material';
import React, { forwardRef } from 'react';

const MoodOptions = forwardRef(({ selectedMood, setSelectedMood }, ref) => {
  const mainemojis = ['😊', '😐', '😔'];
  const subemojis = {
    '😊': ['😍', '😎', '😤', '😥'],
    '😐': ['😮', '😴', '😛', '😜'],
    '😔': ['😡', '😢', '😭', '😱'],
  };
  const [selectedMainEmoji, setSelectedMainEmoji] = React.useState('');
  const [selectedSubEmoji, setSelectedSubEmoji] = React.useState('');
  const handleMainEmojiClick = (emoji) => {
    setSelectedMainEmoji(emoji);
    setSelectedSubEmoji(''); // Reset sub-emoji selection upon selecting a new main emoji
  };
  const handleSubEmojiClick = (emoji) => {
    setSelectedSubEmoji(emoji);
  };

  return (
    <Stack
      className="selector-mood"
      ref={ref}
      selected={selectedMood}
      onSelectMood={setSelectedMood}
      mainEmojis={mainemojis}
      subEmojis={subemojis}
    >
      <Typography variant="subtitle2">How was your day?</Typography>
      <Grid container spacing={1}>
        {/* Main Emojis */}
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center">
            {mainemojis.map((emoji) => (
              <Grid item key={emoji}>
                <Button onClick={() => handleMainEmojiClick(emoji)}>{emoji}</Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sub Emojis */}
        {selectedMainEmoji && (
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center">
              {subemojis[selectedMainEmoji].map((emoji) => (
                <Grid item key={emoji}>
                  <Button
                    onClick={() => handleSubEmojiClick(emoji)}
                    variant={selectedSubEmoji === emoji ? 'contained' : 'text'}
                  >
                    {emoji}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
});
MoodOptions.propTypes = {
  selectedMood: PropTypes.string,
  setSelectedMood: PropTypes.func,
};
export default MoodOptions;
