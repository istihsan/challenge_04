import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonMain from './ButtonMain';

const pages = ['Our Services', 'Why Us', 'Testimonial', 'FAQ',];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{backgroundColor: '#F1F3FF'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/"><img src={"/logo.png"} alt="" /></a>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily:['"Helvetica"'], justifyContent: 'flex-end',}}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 4, color: 'black', display: 'flex', textTransform: 'none', textAlign: 'center', fontFamily:['"Helvetica"']}}
              >
                {page}
              </Button>
            ))}
            <ButtonMain sx={{display: 'flex', left: '83%', alignItems: 'center', marginLeft: '200%'}} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;