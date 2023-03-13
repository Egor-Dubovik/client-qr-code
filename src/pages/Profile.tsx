import React, { useContext } from 'react';
import ProfileList from 'modules/ProfileList/ProfileList';
import Container from '@mui/material/Container';
import ProfileReturnInfo from 'components/ProfileReturnInfo/ProfileReturnInfo';
import { Grid } from '@mui/material';
import ProfileUserInfo from 'components/ProfileUserInfo';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';

const Profile = observer(() => {
  const { profile } = useContext(Context);

  return (
    <Container maxWidth="xl">
      <Grid container item xs={12} sm={12} pt={3}>
        <Grid item xs={12} sm={4} sx={{ mr: { xs: 0, sm: 2, sx: 4 } }}>
          <ProfileList />
        </Grid>
        <Grid item xs={12} sm={7}>
          {profile.isOpen ? <ProfileUserInfo /> : <ProfileReturnInfo />}
        </Grid>
      </Grid>
    </Container>
  );
});

export default Profile;
