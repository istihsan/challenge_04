import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1,boxShadow: 0 }}>
      <Grid container spacing={0}>
        <Grid item md={6} sx={{backgroundColor: '#F1F3FF', fontFamily: ['"Helvetica"'], paddingLeft: '10%', paddingRight: '5%'}}>
          <h1>
          Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
          <h3 style={{fontWeight: '300', marginTop: '12px'}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h3>
        </Grid>
        <Grid item md={6} sx={{backgroundColor: '#F1F3FF', minHeight: '50vh', paddingLeft: '12.5%', paddingTop: '3%'}}>
        <img src={"/img_car.png"}/>
        </Grid>
      </Grid>
    </Box>
  );
}