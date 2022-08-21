import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { Link } from 'react-router-dom';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          거래 내역
        </Typography>
        <Typography variant="subtitle2">
          {user.name}님이 지금까지 단군마켓에서 거래하신 내역입니다.
        </Typography>
      </Grid>
      <Grid item>
        <Link to="/management/products">
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            startIcon={<AddTwoToneIcon fontSize="small" />}
          >
            Create transaction
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
