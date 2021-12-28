import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import useFirebase from '../../firebase/useFirebase';
import logos from '../Header/logos.png';

const Welcome = () => {

  const {user} = useFirebase();

   
    return (
        <Container>
          <Grid container spacing={1}  sx={{margin: '10px auto'}} style={{ gap: 15, m: '0 auto', display: 'flex', justifyContent: 'center' }}>
          <Grid item xs={12} md={7} sx={{backgroundColor: 'white'}} borderRadius={3}>
            <Grid container  >
              <Grid item xs={12} md={6} sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center'}}>
                 <h4 style={{margin: "0"}}>Hello {user.displayName ? <q>{user?.displayName}</q> : <q>Guest</q>} </h4>
                 <p style={{margin: "0"}}>It's Good to see you again.</p>
              </Grid>
              <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={logos} alt="logos" width={'200px'} sx={{display: {md: 'block', xs: 'none'}, margin: '0 auto'}}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sx={{backgroundColor: '#2F2F2F'}} borderRadius={3}>
            <h4 style={{margin: "0", color: 'white'}}>Download Report </h4>
            <p style={{margin: "0", color: 'white'}}>Last Week ></p>
          </Grid>
        </Grid>
        </Container>
    );
};

export default Welcome;