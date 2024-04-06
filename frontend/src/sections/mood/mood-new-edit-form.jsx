import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { useMemo, useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { JOB_SKILL_OPTIONS } from 'src/_mock';

import { useSnackbar } from 'src/components/snackbar';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import SchoolOptions from './selectors/selector-school';
import SocialOptions from './selectors/selector-social';
import WeatherOptions from './selectors/selector-weather';
// ----------------------------------------------------------------------

export default function MoodNewEditForm({ currentMood }) {
  const router = useRouter();
  const mdUp = useResponsive('up', 'md');
  const { enqueueSnackbar } = useSnackbar();

  const mainIcons = [
    {
      id: 'blue',
      icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#abdbe3' }} />,
      subIcons: ['blue1', 'blue2', 'blue3', 'blue4', 'blue5'],
    },
    {
      id: 'green',
      icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#96be25' }} />,
      subIcons: ['green1', 'green2', 'green3', 'green4', 'green5'],
    },
    {
      id: 'grey',
      icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#888b87' }} />,
      subIcons: ['grey1', 'grey2', 'grey3', 'grey4', 'grey5'],
    },
    {
      id: 'pink',
      icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#dac9bf' }} />,
      subIcons: ['pink1', 'pink2', 'pink3', 'pink4', 'pink5'],
    },
    {
      id: 'yellow',
      icon: <ArrowDropDownCircleIcon sx={{ fontSize: 30, color: '#e0b433' }} />,
      subIcons: ['yellow1', 'yellow2', 'yellow3', 'yellow4', 'yellow5'],
    },
  ];
  const subIcons = {
    blue1: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-1.png?raw=true',
    blue2: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-2.png?raw=true',
    blue3: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-3.png?raw=true',
    blue4: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-4.png?raw=true',
    blue5: 'https://github.com/nansvn/Assets/blob/main/mood/blue/blue-5.png?raw=true',
  };

  // You might want to validate the emoji selection as well, depending on your requirements
  const NewMoodSchema = Yup.object().shape({
    tags: Yup.array().min(1, 'Choose at least one tag'),
    comment: Yup.string().max(20, 'Comment must be at most 20 characters'),
  });

  // Add default values for emojis if necessary
  const defaultValues = useMemo(
    () => ({
      tags: currentMood?.skills || [],
    }),
    [currentMood]
  );

  const methods = useForm({
    resolver: yupResolver(NewMoodSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    if (currentMood) {
      reset(defaultValues);
    }
  }, [currentMood, defaultValues, reset]);

  const [selectedMainIconId, setSelectedMainIconId] = useState('');
  const [selectedSubIconId, setSelectedSubIconId] = useState('');
  const handleMainIconClick = (iconId) => {
    setSelectedMainIconId(iconId);
    setSelectedSubIconId('');
  };

  const handleSubIconClick = (iconId) => {
    setSelectedSubIconId(iconId);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      console.info('Selected Emoji:', selectedMainIconId);
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enqueueSnackbar(currentMood ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.mood.root);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });
  const iconSelector = (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Mood right now</Typography>
      <Grid container spacing={1}>
        {/* Main Icons */}
        <Grid item xs={12}>
          <Grid container spacing={1} justifyContent="center">
            {mainIcons.map((icon) => (
              <Grid item key={icon.id}>
                <Button onClick={() => handleMainIconClick(icon.id)}>{icon.icon}</Button>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Sub Icons */}
        {selectedMainIconId && (
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center">
              {mainIcons
                .find((icon) => icon.id === selectedMainIconId)
                .subIcons.map((iconId) => (
                  <Grid item key={iconId}>
                    <Button
                      onClick={() => handleSubIconClick(iconId)}
                      variant={selectedSubIconId === iconId ? 'contained' : 'text'}
                    >
                      <img src={subIcons[iconId]} alt={iconId} style={{ width: 50, height: 50 }} />
                    </Button>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Stack>
  );

  // Adjust your renderContent or renderActions as needed to include the emojiSelector
  const renderContent = (
    <Grid sx={{ px: '20px' }} xs={12} md={12}>
      <Card sx={{ padding: '50px 100px 50px 100px', backgroundColor: 'rgba(253, 242, 197, 0.2)' }}>
        {!mdUp && <CardHeader title="Mood" />}
        <Stack spacing={2} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
          {iconSelector}
          <Controller
            control={methods.control}
            name="weather"
            render={({ field }) => (
              <WeatherOptions
                weather={field.value}
                onChangeWeather={(newWeather) => field.onChange(newWeather)}
              />
            )}
          />
          <Controller
            control={methods.control}
            name="schoolActivity"
            render={({ field }) => (
              <SchoolOptions
                school={field.value}
                onChangeSchool={(newSchool) => field.onChange(newSchool)}
              />
            )}
          />

          <Controller
            control={methods.control}
            name="socialActivity"
            render={({ field }) => (
              <SocialOptions
                social={field.value}
                onChangeSocial={(newSocial) => field.onChange(newSocial)}
              />
            )}
          />

          <Stack spacing={2}>
            {/* comment */}
            <Typography variant="subtitle2">Comment</Typography>
            <RHFTextField name="comment" label="Enter here" multiline rows={2} />
            {/* tags */}
            <Typography variant="subtitle2">Tags</Typography>
            <RHFAutocomplete
              name="tags"
              placeholder="+ Tags"
              multiple
              disableCloseOnSelect
              options={JOB_SKILL_OPTIONS.map((option) => option)}
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <li {...props} key={option}>
                  {option}
                </li>
              )}
              renderTags={(selected, getTagProps) =>
                selected.map((option, index) => (
                  <Chip
                    {...getTagProps({ index })}
                    key={option}
                    label={option}
                    size="small"
                    color="info"
                    variant="soft"
                  />
                ))
              }
            />
          </Stack>
        </Stack>
      </Card>
    </Grid>
  );

  const renderActions = (
    <>
      {mdUp && <Grid md={4} />}
      <Grid xs={12} md={8} sx={{ display: 'flex', alignItems: 'center' }}>
        <LoadingButton
          type="submit"
          variant="contained"
          color="success"
          size="large"
          loading={isSubmitting}
          sx={{ ml: 2 }}
        >
          {!currentMood ? 'Create New' : 'Save Changes'}
        </LoadingButton>
      </Grid>
    </>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {renderContent}
        {renderActions}
      </Grid>
    </FormProvider>
  );
}

MoodNewEditForm.propTypes = {
  currentMood: PropTypes.object,
};
