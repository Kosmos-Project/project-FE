import { Card, CardHeader, CardContent } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProductItem = () => {
  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer', margin: '8px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%' // 16:9
        }}
        image="/static/images/placeholders/covers/1.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
