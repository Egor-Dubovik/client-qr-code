import React from 'react';
import ProfileList from 'modules/ProfileList/ProfileList';
import Container from '@mui/material/Container';
import ProfileReturnInfo from 'components/ProfileReturnInfo';
import { Grid } from '@mui/material';
import ProfileUserInfo from 'components/ProfileUserInfo';

const Profile = () => {
  return (
    <Container maxWidth="xl">
      <Grid container xs={12} sm={12} pt={3}>
        <Grid item xs={12} sm={4}>
          <ProfileList />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ProfileReturnInfo />
          {/* <ProfileUserInfo /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
