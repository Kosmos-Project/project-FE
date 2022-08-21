import { Grid } from '@mui/material';
import PersonalDetails from './PersonalDetails';
import EmailSettings from './EmailSettings';

function EditProfileTab() {
  return (
    <Grid container spacing={3}>
      <PersonalDetails />
      <EmailSettings />
    </Grid>
  );
}

export default EditProfileTab;
