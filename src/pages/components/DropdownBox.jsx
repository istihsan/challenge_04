import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  InputLabel,
} from '@mui/material';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useNavigate } from 'react-router-dom';
  
  const styles = {
    contentUtama: {
      fontFamily : ['"Times New Roman"'],
      width: '70%',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      marginTop: '-7vh',
      borderRadius: '20px',
      padding: 5,
    },
  };
  
  function DropdownBox() {
    const navigate = useNavigate();

    const handleSubmit = () =>{
      navigate('/search');
    }
  
    const [Driver, setDriver] = React.useState('');
  
    const handleChange = (event) => {
      setDriver(event.target.value);
    };

    const [value, setValue] = React.useState('');

    const handleChangeValue = (event) => {
      setValue(event.target.value);
    };
  

    return (
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={styles.contentUtama}>
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="center"
        >
          <Grid item xs>
            <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Tipe Driver</Typography>
            <Select
            labelId="demo-simple-select-label"
            size="medium"
            id="demo-simple-select"
            style={{minWidth: '195px'}}
            defaultValue= ""
            displayEmpty
            // onChange={handleChange}
            >
            <MenuItem value="">Pilih Tipe Driver</MenuItem>
            <MenuItem value={10}>Dengan Driver</MenuItem>
            <MenuItem value={20}>Tanpa Driver</MenuItem>
            </Select>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Tanggal Jemput</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  size="medium"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} helperText={null} />}
                />
            </LocalizationProvider>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>Waktu Jemput/Ambil</Typography>
            <Select
            size="medium"
            placeholder='08.00'
            style={{minWidth: '195px'}}
            displayEmpty
            value={Driver}
            >
            <MenuItem value="">01.00</MenuItem>
            <MenuItem value={1}>01.00</MenuItem>
            <MenuItem value={2}>02.00</MenuItem>
            <MenuItem value={3}>03.00</MenuItem>
            <MenuItem value={4}>04.00</MenuItem>
            <MenuItem value={5}>05.00</MenuItem>
            <MenuItem value={6}>06.00</MenuItem>
            <MenuItem value={7}>07.00</MenuItem>
            <MenuItem value={8}>08.00</MenuItem>
            <MenuItem value={9}>09.00</MenuItem>
            <MenuItem value={10}>10.00</MenuItem>
            <MenuItem value={11}>11.00</MenuItem>
            <MenuItem value={12}>12.00</MenuItem>
            <MenuItem value={13}>13.00</MenuItem>
            <MenuItem value={14}>14.00</MenuItem>
            <MenuItem value={15}>15.00</MenuItem>
            <MenuItem value={16}>16.00</MenuItem>
            <MenuItem value={17}>17.00</MenuItem>
            <MenuItem value={18}>18.00</MenuItem>
            <MenuItem value={19}>19.00</MenuItem>
            <MenuItem value={20}>20.00</MenuItem>
            <MenuItem value={21}>21.00</MenuItem>
            <MenuItem value={22}>22.00</MenuItem>
            <MenuItem value={23}>23.00</MenuItem>
            <MenuItem value={24}>24.00</MenuItem>
            </Select>
          </Grid>
          <Grid item xs>
            <Typography variant="caption" sx={{fontFamily: ['"Helvetica"']}}>
              Jumlah Penumpang(optional)
            </Typography>
            <TextField
              size="medium"
              id="my-input"
              aria-describedby="my-helper-text"
              type="number"
              defaultValue= "1"
            />
          </Grid>
          <Grid item xs>
          <form onSubmit={handleSubmit}><Button variant="contained" color="success" type="submit" sx={{height:"55px"}}>Cari Mobil</Button></form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
  
  export default DropdownBox;