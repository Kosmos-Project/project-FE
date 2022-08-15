import { Grid } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import AccountSettings from './AccountSettings';
import EmailSettings from './EmailSettings';

function EditProfileTab() {
  return (
    <Grid container spacing={3}>
      <PersonalDetails />
      <AccountSettings />
      <EmailSettings />
    </Grid>
  );
}

export default EditProfileTab;
