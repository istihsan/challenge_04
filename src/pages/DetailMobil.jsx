import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
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
import { useParams } from 'react-router-dom';


function DetailMobil() {

    const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([])

  useEffect(() => {
    handleDetail();
  }, [id])

  const handleDetail = async () =>{
    try {
      const res = await axios(`https://rent-cars-api.herokuapp.com/customer/car/${id}`);
      setDataDetail(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
    <Navbar />
    <Box sx={{ minHeight: 150, backgroundColor: '#F1F3FF;', fontFamily:['Halvetica'] }}></Box>
    <FormPencarian />
    <Container minWidth="90vh" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card minWidth="90vh" sx={{marginY:"3%", marginX: "2%", minWidth: "40vw"}}>
          <CardContent>
        <h3>Tentang Paket</h3>
          <p>Include</p>
        <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>sudah termasuk pajak</li>
        </ul>
        <p>Exclude</p>
        <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography><strong>Refund, Reschedule, Overtime</strong></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp.75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp.20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>

          </CardContent>
            </Card>

            <Card sx={{maxWidth:"350", marginY:"3%", maxHeight:"45vh" }}>
                <CardMedia
                        component="img"
                        height="200"
                        image={dataDetail.image}
                        alt="img-car" 
                />
                <CardContent sx={{minWidth: "15vw"}}>
                    <Typography gutterBottom variant="h5" component="div">
                    {dataDetail.name}
                    </Typography>
                    <p><img src="/fi_users.png" alt="" style={{marginRight:'2%'}}/>4 orang
                    <img src="/fi_settings.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Manual
                    <img src="/fi_calendar.png" alt="" style={{marginLeft:'3%', marginRight:'2%',}}/>Tahun 2020</p>
                    <p>Total <span style={{marginLeft:'50%'}}><strong>Rp {dataDetail.price}</strong></span></p>
                </CardContent>
                <CardActions>
                <Button color="success" variant="contained" fullWidth>Lanjutkan Pembayaran</Button>
            </CardActions>
            </Card>
    </Container>
    <Footer />
  </div>
);
}

export default DetailMobil;