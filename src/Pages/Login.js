import React from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import { bgcolor, borderRadius } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Public } from '@mui/icons-material';


export default function Login() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={mainContainer}>
          <Typography sx={{ color: '#673ab7', paddingTop: 10 }} variant="h7" component="h2" >Hi, Welcome Back</Typography>
          <Typography sx={signInContainer} variant="h6" component="h2" >Sign in with Email address</Typography>
          <Typography sx={{color: '#9e9e9e', marginBottom: 5, fontSize : 'medium'}} variant="h6" component="h2" >Enter your credentials to continue</Typography>
          <Box sx={boxStyle}>
            <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Box sx={boxStyle} >
            <TextField fullWidth type={'password'} id="outlined-basic" label="password" variant="outlined" />
          </Box>
          <Button sx={btnStyle} variant="contained">Sign in</Button>
        </Box>
      </Container>
    </>
  )
}

const mainContainer = {
  margin : 10,
  width: '50vh', 
  bgcolor: 'white', 
  overflowY : 'hidden',
  borderRadius: 3, 
  textAlign: 'center' ,
  border : 'solid 1px rgba(35,31,32,.1)'
}

const boxStyle = {
  marginTop: '20px',
  marginLeft: '40px',
  marginRight: '40px'
}

const signInContainer = {
  color: 'rgb(97, 97, 97)',
  paddingTop: 10,
  bgcolor: 'rgba(35,31,32,.1)',
  padding: 1,
  margin: 5,
  borderRadius: 2,
  fontSize : 'medium'
}

const btnStyle = {
  marginTop: '20px',
  marginBottom : 20,
  padding: 1,
  marginLeft : '5px',
  marginRight : '5px',
  bgcolor: '#673ab7',
  width : '80%'
}