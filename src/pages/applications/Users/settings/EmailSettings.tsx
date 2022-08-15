import {
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
  Divider,
  Button
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import AccountSettings from './AccountSettings';

const EmailSettings = () => {
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
              Email Addresses
            </Typography>
            <Typography variant="subtitle2">
              Manage details related to your associated email addresses
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
                  Email ID:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>example@demo.com</b>
                </Text>
                <Box pl={1} component="span">
                  <Label color="success">Primary</Label>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                <Box pr={3} pb={2}>
                  Email ID:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>demo@example.com</b>
                </Text>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EmailSettings;
