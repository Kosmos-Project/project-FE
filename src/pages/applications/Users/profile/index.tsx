import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';

function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description: '안녕하세요. 프론트엔드 개발자입니다.',
    jobtitle: 'Web Developer',
    location: '성남시 분당구',
    followers: '465'
  };

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={12}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Addresses />
          </Grid>
          <Grid item xs={12} md={6}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={6}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={6}>
            <MyCards />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
