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
import Text from 'src/components/Text';
import { useState } from 'react';

const PersonalDetails = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
              Personal Details
            </Typography>
            <Typography variant="subtitle2">
              Manage informations related to your personal details
            </Typography>
          </Box>
          <Button
            variant="text"
            startIcon={<EditTwoToneIcon />}
            onClick={handleClickOpen}
          >
            Edit
          </Button>{' '}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>취소</Button>
              <Button onClick={handleClose} autoFocus>
                수정
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Divider />
        <CardContent sx={{ p: 4 }}>
          <Typography variant="subtitle2">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'left' }}>
                <Box pr={3} pb={2}>
                  이름:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>홍길동</b>
                </Text>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'left' }}>
                <Box pr={3} pb={2}>
                  닉네임:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>홍길동</b>
                </Text>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'left' }}>
                <Box pr={3} pb={2}>
                  Date of birth:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Text color="black">
                  <b>15 March 1977</b>
                </Text>
              </Grid>
              <Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'left' }}>
                <Box pr={3} pb={2}>
                  주소:
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                  <Text color="black">
                    1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California,
                    93262
                  </Text>
                </Box>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PersonalDetails;
