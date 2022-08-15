import {
  Card,
  Box,
  CardContent,
  Typography,
  Avatar,
  alpha,
  styled,
  Grid
} from '@mui/material';

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
    margin: ${theme.spacing(2, 0, 1, -0.5)};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(1)};
    padding: ${theme.spacing(0.5)};
    border-radius: 60px;
    height: ${theme.spacing(5.5)};
    width: ${theme.spacing(5.5)};
    background: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[30]
        : alpha(theme.colors.alpha.black[100], 0.07)
    };
  
    img {
      background: ${theme.colors.alpha.trueWhite[100]};
      padding: ${theme.spacing(0.5)};
      display: block;
      border-radius: inherit;
      height: ${theme.spacing(4.5)};
      width: ${theme.spacing(4.5)};
    }
`
);

const WalletItems = () => {
  return (
    <Grid xs={12} sm={6} md={3} item>
      <Card
        sx={{
          px: 1
        }}
      >
        <CardContent>
          <AvatarWrapper>
            <img alt="BTC" src="/static/images/placeholders/logo/bitcoin.png" />
          </AvatarWrapper>
          <Typography variant="h5" noWrap>
            Bitcoin
          </Typography>
          <Typography variant="subtitle1" noWrap>
            BTC
          </Typography>
          <Box
            sx={{
              pt: 3
            }}
          >
            <Typography variant="h3" gutterBottom noWrap>
              $3,586.22
            </Typography>
            <Typography variant="subtitle2" noWrap>
              1.25843 BTC
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default WalletItems;
