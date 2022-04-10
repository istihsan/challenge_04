import {
    Box,
    Button,
    Container,
    Card,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
  } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormPencarian from './components/DropdownBox';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search(){
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {
    setLoading(true);
    try {
      const res = await axios(
        "https://rent-cars-api.herokuapp.com/customer/car"
      );
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoDetail = (id) => {
    navigate(`/DetailMobil/${id}`)
  }


  return (
    <div style={{ minHeight: '100vh' }}>
    <Navbar />

    <Box sx={{ minHeight: 150, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}></Box>
    <FormPencarian />
    <center>{loading && "Loading Data"}</center> 
    
    <form>
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
    {dataList.map((item) => {
      return(
        <Card key={item.id} sx={{marginY:"3%", marginX: "0.25%" }}>
          <CardMedia
                  component="img"
                  image={item.image}
                  alt="img-car" 
                  sx={{maxHeight: "20vh", minHeight:'20vh'}}
          />
          <CardContent>
              <p>{item.name}</p>
              <Typography gutterBottom variant="h6" component="div">
                Rp {item.price} / hari
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </Typography>
              <p><img src="/fi_users.png" alt="" style={{marginRight:'4%'}}/>4 orang</p>
              <p><img src="/fi_settings.png" alt="" style={{marginRight:'4%'}}/>Manual</p>
              <p><img src="/fi_calendar.png" alt="" style={{marginRight:'4%'}}/>Tahun 2020</p>
          </CardContent>
          <CardActions>
        <Button color="success" variant="contained" fullWidth onClick={() => handleGoDetail(item.id)}>Pilih Mobil</Button>
      </CardActions>
    </Card>
      );
    })}
    </Container>
    </form>
    
    <Footer />
  </div>
);
}

export default Search;