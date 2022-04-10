import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

function FooterMain() {
  return (
    <Box sx={{ flexGrow: 0,boxShadow: 0 }}>
    <Grid container spacing={0}>
      <Grid item md={3} sx={{fontFamily: ['"Helvetica"'], fontWeight: '500', fontStyle: 'normal', paddingLeft: '10%', paddingTop: '5%'}}>
        <h1 style={{fontWeight: '300', fontSize: '14px', marginTop: '10%'}}>
        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h1>
        <h1 style={{fontWeight: '300', fontSize: '14px', marginTop: '10%'}}>
        binarcarrental@gmail.com</h1>
        <h1 style={{fontWeight: '300', fontSize: '14px', marginTop: '10%'}}>
        081-233-334-808</h1>
      </Grid>
      <Grid item md={3} sx={{fontFamily: ['"Helvetica"'], fontWeight: '500', paddingLeft: '7%', paddingTop: '5%'}}>
        <h1 style={{fontWeight: '400', fontSize: '14px', marginTop: '7%'}}>Our Services</h1>
        <h1 style={{fontWeight: '400', fontSize: '14px', marginTop: '7%'}}>Why Us</h1>
        <h1 style={{fontWeight: '400', fontSize: '14px', marginTop: '7%'}}>Testimonial</h1>
        <h1 style={{fontWeight: '400', fontSize: '14px', marginTop: '7%'}}>FAQ</h1>
      </Grid>
      <Grid item md={3} sx={{fontFamily: ['"Helvetica"'], fontWeight: '500', paddingLeft: '7%', paddingTop: '5%'}}>
        <h1 style={{fontWeight: '300', fontSize: '14px'}}>Connect with us</h1>
        <img src="/icon_facebook.png" style={{marginLeft: '5px', marginTop: '2%'}}/>
        <img src="/icon_instagram.png" style={{marginLeft: '5px', marginTop: '2%'}}/>
        <img src="/icon_twitter.png" style={{marginLeft: '5px', marginTop: '2%'}}/>
        <img src="/icon_mail.png" style={{marginLeft: '5px', marginTop: '2%'}}/>
        <img src="/icon_twitch.png" style={{marginLeft: '5px', marginTop: '2%'}}/>
      </Grid>
      <Grid item md={3} sx={{fontFamily: ['"Helvetica"'], fontWeight: '500', paddingLeft: '7%', paddingTop: '5%'}}>
        <h1 style={{fontWeight: '300', fontSize: '14px'}}>Copyright Binar 2022</h1>
        <img src="/Rectangle 74.png"/>
      </Grid>
    </Grid>
  </Box>
  )
}

export default FooterMain