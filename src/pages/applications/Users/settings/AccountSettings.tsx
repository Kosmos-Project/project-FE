import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import { useState } from 'react';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const AccountSettings = () => {
  return (
    <Grid item xs={12}>
      <Card>
        <Box
          p={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h4" gutterBottom>
              Account Settings
            </Typography>
            <Typography variant="subtitle2">
              Manage details related to your account
            </Typography>
          </Box>
          <Button variant="text" startIcon={<EditTwoToneIcon />}>
            Edit
          </Button>
        </Box>
        <Divider />
        <CardContent sx={{ p: 4 }}>
          <Typography variant="subtitle2">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                <Box pr={3} pb={2}>
                  Language:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>English (US)</b>
                </Text>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                <Box pr={3} pb={2}>
                  Timezone:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>GMT +2</b>
                </Text>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                <Box pr={3} pb={2}>
                  Account status:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Label color="success">
                  <DoneTwoToneIcon fontSize="small" />
                  <b>Active</b>
                </Label>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AccountSettings;
