import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Login() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: 'whiteSmoke', height: '100vh', borderRadius: 3, textAlign: 'center'}}>
          <Typography sx={{color: 'black'}} variant="h4" component="h2" >Hi, Welcome Back</Typography>
        </Box>
      </Container>
    </>
  )
}