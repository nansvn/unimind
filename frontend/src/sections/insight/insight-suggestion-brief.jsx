import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function BookingCustomerReviews({ title, subheader, list, ...other }) {
  const carousel = useCarousel({
    adaptiveHeight: true,
  });

  const customerInfo = list.find((_, index) => index === carousel.currentIndex);

  return (
    <Card {...other}>
      <CardHeader
        title={title}
        subheader={subheader}
        action={<CarouselArrows onNext={carousel.onNext} onPrev={carousel.onPrev} />}
      />

      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {list.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </Carousel>
      <Typography>{list.map((item) => item.title)}</Typography>
      <Divider sx={{ borderStyle: 'dashed' }} />

      <Button
        fullWidth
        color="inherit"
        variant="contained"
        onClick={() => console.info('REJECT', customerInfo?.id)}
      >
        See all
      </Button>
    </Card>
  );
}

BookingCustomerReviews.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function ReviewItem({ item }) {
  const { description } = item;

  return (
    <Grid
      spacing={2}
      sx={{
        p: 2,
        position: 'relative',
      }}
    >
      <Typography variant="body2">{description}</Typography>
    </Grid>
  );
}

ReviewItem.propTypes = {
  item: PropTypes.object,
};
