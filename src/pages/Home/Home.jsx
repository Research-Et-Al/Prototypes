import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainCard from '../../components/MainCard';


const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#121212",
        contrastText: "#fff"
      }
    }
  });

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Home = () => (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            // bgcolor: 'background.paper',
            // bgcolor: '#7330D3',
            pt: 8,
            pb: 6,
            backgroundImage: "linear-gradient(#2F0F58, #7330D3)"
          }}
        >
          <Container maxWidth="sm">
            <MainCard />
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl" style={{ backgroundColor: "#fff" }}>
          {/* End hero unit */}
          <Grid container spacing={8}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card variant="outlined"
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: "#fff" }}
                >
                
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '0',
                      width: "100%",
                      height: "5rem"
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>`
      
    </ThemeProvider>
  );



export default Home ;