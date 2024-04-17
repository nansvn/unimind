import * as Yup from 'yup';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import axios, { endpoints } from 'src/utils/axios';

import { useAuthContext } from 'src/auth/hooks';
import { TAGS, subIcons, mainIcons, findIconIds } from 'src/_mock/_mood';

import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

import SchoolOptions from './selectors/selector-school';
import SocialOptions from './selectors/selector-social';
import WeatherOptions from './selectors/selector-weather';

// ----------------------------------------------------------------------
export default function MoodNewEditForm({ currentMood }) {
  const { user } = useAuthContext();
  const router = useRouter();
  const mdUp = useResponsive('up', 'md');

  const NewMoodSchema = Yup.object().shape({
    tags: Yup.array().min(1, 'Choose at least one tag'),
    comment: Yup.string().max(20, 'Comment must be at most 20 characters'),
  });

  const defaultValues = useMemo(
    () => ({
      tags: currentMood?.tags || [],
      comment: currentMood?.comment || [],
      mood: currentMood?.mood || '',
      weather: currentMood?.weather || '',
      schoolActivities: currentMood?.schoolActivities || '',
      socialActivities: currentMood?.socialActivities || '',
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

  const [selectedMainIconId, setSelectedMainIconId] = useState(() => {
    const initialIds = currentMood ? findIconIds(currentMood.mood) : {};
    return initialIds.mainIconId || '';
  });

  const [selectedSubIconId, setSelectedSubIconId] = useState(() => {
    const initialIds = currentMood ? findIconIds(currentMood.mood) : {};
    return initialIds.subIconId || '';
  });

  useEffect(() => {
    if (currentMood) {
      reset(defaultValues);
      const { mainIconId, subIconId } = findIconIds(currentMood.mood);
      setSelectedMainIconId(mainIconId);
      setSelectedSubIconId(subIconId);
    }
  }, [currentMood, defaultValues, reset]);

  const handleMainIconClick = (iconId) => {
    setSelectedMainIconId(iconId);
    setSelectedSubIconId('');
  };

  const handleSubIconClick = (iconId) => {
    setSelectedSubIconId(iconId);
  };

  const onSubmit = handleSubmit(async (data) => {
    const moodData = {
      ...data,
      mood: selectedSubIconId,
      userID: user._id,
    };
    try {
      const isNewRecord = !currentMood;

      if (currentMood) {
        await axios.put(endpoints.mood.update(currentMood._id), moodData);
      } else {
        await axios.post(endpoints.mood.root, moodData);
      }
      const query = queryString.stringify({
        success: isNewRecord ? 'new' : 'edit',
      });
      router.push(`${paths.dashboard.mood.root}?${query}`);
    } catch (error) {
      console.error(error);
    }
  });

  const iconSelector = (
    <Stack spacing={2}>
      <Typography variant="subtitle2">Mood right now</Typography>
      <Grid container spacing={1}>
        {/* Main Icons */}
        <Grid item xs={12} md={12}>
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

  const renderContent = (
    <Grid sx={{ px: '20px' }} xs={12} md={12}>
      {!mdUp && <CardHeader title="Mood" />}
      <Stack spacing={2}>
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
          name="schoolActivities"
          render={({ field }) => (
            <SchoolOptions
              school={field.value}
              onChangeSchool={(newSchool) => field.onChange(newSchool)}
            />
          )}
        />

        <Controller
          control={methods.control}
          name="socialActivities"
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
            options={TAGS.map((option) => option)}
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
      <Card
        sx={{
          margin: '0 80px 0 80px',
          padding: '50px 100px 50px 100px',
          backgroundColor: '#faedcdc7',
        }}
      >
        <Grid container spacing={3}>
          {renderContent}
          {renderActions}
        </Grid>
      </Card>
    </FormProvider>
  );
}

MoodNewEditForm.propTypes = {
  currentMood: PropTypes.object,
};
