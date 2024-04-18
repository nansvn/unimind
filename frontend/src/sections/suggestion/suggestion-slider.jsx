import { m } from 'framer-motion';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';
import { varFade, MotionContainer } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrowIndex } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function CarouselAnimation({ data }) {
  const carousel = useCarousel({
    speed: 800,
    autoplay: true,
  });

  return (
    <Card>
      <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} active={index === carousel.currentIndex} />
        ))}
      </Carousel>

      <CarouselArrowIndex
        index={carousel.currentIndex}
        total={data.length}
        onNext={carousel.onNext}
        onPrev={carousel.onPrev}
      />
    </Card>
  );
}

CarouselAnimation.propTypes = {
  data: PropTypes.array,
};

// ----------------------------------------------------------------------

function CarouselItem({ item, active }) {
  const theme = useTheme();

  const { coverUrl, title } = item;

  const variants = theme.direction === 'rtl' ? varFade().inLeft : varFade().inRight;

  return (
    <Paper sx={{ position: 'relative' }}>
      <Image dir="ltr" alt={title} src={coverUrl} ratio="16/9" />

      <Box
        sx={{
          top: 0,
          width: 1,
          height: 1,
          position: 'absolute',
          ...bgGradient({
            direction: 'to top',
            startColor: `${theme.palette.grey[900]} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 0)} 100%`,
          }),
        }}
      />

      <CardContent
        component={MotionContainer}
        animate={active}
        action
        sx={{
          left: 10,
          bottom: 150,
          maxWidth: 700,
          textAlign: 'left',
          position: 'absolute',
          color: 'common.white',
        }}
      >
        <m.div variants={variants}>
          <Typography variant="h3" gutterBottom>
            {item.title}
          </Typography>
        </m.div>

        <m.div variants={variants}>
          <Typography variant="subtitle2" gutterBottom>
            {item.description}
          </Typography>
        </m.div>
      </CardContent>
    </Paper>
  );
}

CarouselItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.object,
};
