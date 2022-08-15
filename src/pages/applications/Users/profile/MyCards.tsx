import { Box, Grid, Card, CardHeader, Divider } from '@mui/material';
import Cards from './Card';
import AddCards from './AddCards';

function MyCards() {
  const data = {
    savedCards: 7
  };

  return (
    <Card>
      <CardHeader subheader={data.savedCards + ' saved cards'} title="Cards" />
      <Divider />
      <Box p={3}>
        <Grid container spacing={3}>
          <Cards />
          <Cards />
          <Cards />
          <AddCards />
        </Grid>
      </Box>
    </Card>
  );
}

export default MyCards;
