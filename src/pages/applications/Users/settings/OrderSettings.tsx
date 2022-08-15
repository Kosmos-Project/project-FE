import { useState, ChangeEvent } from 'react';
import {
  Box,
  Typography,
  Card,
  Grid,
  ListItem,
  List,
  ListItemText,
  Divider,
  Switch
} from '@mui/material';

const OrderSettings = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: false,
    checkedC: true,
    checkedD: false
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <Grid item xs={12}>
      <Box pb={2}>
        <Typography variant="h3">Orders</Typography>
        <Typography variant="subtitle2">
          Receive email notifications related to your orders activity
        </Typography>
      </Box>
      <Card>
        <List>
          <ListItem sx={{ p: 3 }}>
            <ListItemText
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{
                variant: 'subtitle2',
                lineHeight: 1
              }}
              primary="Failed Payment"
              secondary="Get a message when a payment fails"
            />
            <Switch
              color="primary"
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
            />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ p: 3 }}>
            <ListItemText
              primaryTypographyProps={{ variant: 'h5', gutterBottom: true }}
              secondaryTypographyProps={{
                variant: 'subtitle2',
                lineHeight: 1
              }}
              primary="Order Status Update"
              secondary="Whenever an order is updated, get a notification on your phone"
            />
            <Switch
              color="primary"
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
            />
          </ListItem>
        </List>
      </Card>
    </Grid>
  );
};

export default OrderSettings;
