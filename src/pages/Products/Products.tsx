import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ProductItem from './ProductItem';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

function Products() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Helmet>
        <title>Cards - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="상품"
          subHeading="마음에 드는 상품을 구매해 보세요!"
          docs="https://material-ui.com/components/cards/"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Complex Example" />
              <Divider />
              <CardContent sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
