import React, { useState } from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import TextField from '@mui/material/TextField';
import { bgcolor, borderRadius } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Public } from '@mui/icons-material';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AlifAlert from '../Components/Alert';


export default function Login() {

  const history = useHistory()

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleUserNameCHangeInput = (event) => {
    console.log(event.target.value);
    setusername(event.target.value);
  }

  const handlePasswordChangeInput = (event) => {
    console.log(event.target.value)
    setpassword(event.target.value);
  }

  const usernameAndPassword = async () => {
    const data = {
      'username': username,
      'password': password
    }
    console.log(data)
    let loginRes = await axios.post(Endpoint.getLoginURL(), data).catch((err) => {
      console.log(`Error in ${err}`);
    });

    if (loginRes?.status != Constants.OK) {
      //error show
      showLoginError('Something went wrong');
      return;
    }

    if (loginRes?.data?.responseWrapper[1] == null) {
      showLoginError('User not found')
    } else {
      const role = loginRes?.data?.responseWrapper[1]
      console.log(role)
      if (role !== Constants.ROLE_ADMIN) {
        showLoginError('User not authorized');
        return
      }
    }
    console.log(loginRes.data)
    if (loginRes?.data?.responseWrapper[0] == null) {
      showLoginError('User Not Found')
    } else {
      const token = loginRes?.data?.responseWrapper[0]
      console.log(token);
      localStorage.setItem(Constants.TOKEN, token)
      history.push('/home')
    }
  }


  const showLoginError = (message) => {
    console.log('Error in login' + message)
    setShowAlert(true)
    setAlertMessage(message)
    setAlertSeverity('error')
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <>

      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={mainContainer}>
          <AlifAlert
            show={showAlert}
            severity={alertSeverity}
            message={alertMessage}
          />
          <Typography sx={{ color: '#673ab7', paddingTop: 10 }} variant="h7" component="h2" >Hi, Welcome Back</Typography>
          <Typography sx={signInContainer} variant="h6" component="h2" >Sign in with Email address</Typography>
          <Typography sx={{ color: '#9e9e9e', marginBottom: 5, fontSize: 'medium' }} variant="h6" component="h2" >Enter your credentials to continue</Typography>
          <Box sx={boxStyle}>
            <TextField fullWidth onChange={(event) => { handleUserNameCHangeInput(event) }} id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Box sx={boxStyle} >
            <TextField fullWidth onChange={(event) => { handlePasswordChangeInput(event) }} type={'password'} id="outlined-basic" label="password" variant="outlined" />
          </Box>
          <Button onClick={usernameAndPassword} sx={btnStyle} variant="contained">Sign in</Button>
        </Box>
      </Container>
    </>
  )
}

const mainContainer = {
  margin: 10,
  width: '50vh',
  bgcolor: 'white',
  overflowY: 'hidden',
  borderRadius: 3,
  textAlign: 'center',
  border: 'solid 1px rgba(35,31,32,.1)'
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
  fontSize: 'medium'
}

const btnStyle = {
  marginTop: '20px',
  marginBottom: 20,
  padding: 1,
  marginLeft: '5px',
  marginRight: '5px',
  bgcolor: '#673ab7',
  width: '80%'
}