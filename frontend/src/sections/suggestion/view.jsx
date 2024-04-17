import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

import { _mock } from 'src/_mock';

import CarouselAnimation from './suggestion-slider';

// ----------------------------------------------------------------------
const _carouselsExample = [...Array(20)].map((_, index) => ({
  id: _mock.id(index),
  title: _mock.title(index),
  coverUrl: _mock.image.cover(index),
  description: _mock.suggestion(index),
}));

// ----------------------------------------------------------------------
export default function SuggestionView() {
  return (
    <Container
      sx={{
        mb: 3,
        alignItems: 'flex-start',
      }}
    >
      <Card sx={{ px: 3 }}>
        <CardHeader title="Suggestion" />
        <CardContent>
          <CarouselAnimation data={_carouselsExample.slice(0, 7)} />
        </CardContent>
      </Card>
    </Container>
  );
}
