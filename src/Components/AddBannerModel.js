import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from "@mui/icons-material/Close";
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import Typography from "@mui/material/Typography";
import axios from "axios";
import AlifAlert from "./Alert";

const saveButton = {
  marginTop: '15px',
  backgroundColor: '#673ab7'
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: "fitContent",
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  marginTop: '15px'
}

const inputStyle2 = {
  marginTop: '15px',
  marginRight: '5px'
}

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#673ab7',
    },
  },
});

const bannerMainContainer = {
  marginTop: '30px'
}

export default function AddBannerModel(props) {

  const [bannerimg1, setBannerimg1] = useState();
  const [bannerimg2, setBannerimg2] = useState();
  const [bannerimg3, setBannerimg3] = useState();
  const [bannerimg4, setBannerimg4] = useState();
  const [bannerimg5, setBannerimg5] = useState();
  const [bannerimg6, setBannerimg6] = useState();
  const [bannerimg7, setBannerimg7] = useState();
  const [severity, setSeverity] = useState('error');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('Something went wrong')

  const bannerImage1 = (e) => {
    console.log(e.target.value)
    setBannerimg1(e.target.value)
  }

  const bannerImage2 = (e) => {
    console.log(e.target.value)
    setBannerimg2(e.target.value)
  }

  const bannerImage3 = (e) => {
    console.log(e.target.value)
    setBannerimg3(e.target.value)
  }

  const bannerImage4 = (e) => {
    console.log(e.target.value)
    setBannerimg4(e.target.value)
  }

  const bannerImage5 = (e) => {
    console.log(e.target.value)
    setBannerimg5(e.target.value)
  }

  const bannerImage6 = (e) => {
    console.log(e.target.value)
    setBannerimg6(e.target.value)
  }

  const bannerImage7 = (e) => {
    console.log(e.target.value)
    setBannerimg7(e.target.value)
  }

  const requestHeader = {
    Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`

  }

  const bannerDetails = () => {
    const data = {
      'bannerimg1': bannerimg1,
      'bannerimg2': bannerimg2,
      'bannerimg3': bannerimg3,
      'bannerimg4': bannerimg4,
      'bannerimg5': bannerimg5,
      'bannerimg6': bannerimg6,
      'bannerimg7': bannerimg7,
    }
    console.log(data)

    axios.post(Endpoint.postAllBanners(), data, {
      headers: requestHeader
    }).then((res) => {
      console.log(res)
      setSeverity('success')
      setShow(true)
      setMessage('Banner saved successfully')
      setTimeout(() => {
        setShow(false)
      }, 2000)

    }).catch((err) => {
      console.log(err)
      setSeverity('error')
      setShow(true)
      setMessage('Something went wrong')
    })
    setTimeout(() => {
      handleClose()
    }, 2000)
  }

  const handleClose = () => {
    props.parentCallback();
  };

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed">
            <Toolbar>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Add Banner
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box style={{ marginTop: '50px' }}>
            <AlifAlert
              severity={severity}
              show={show}
              message={message}
            />
          </Box>
        </ThemeProvider>
        <Box sx={bannerMainContainer}>
          <TextField onChange={(e) => { bannerImage1(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 1" variant="outlined" />
          <TextField onChange={(e) => { bannerImage2(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 2" variant="outlined" />
          <TextField onChange={(e) => { bannerImage3(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 3" variant="outlined" />
          <TextField onChange={(e) => { bannerImage4(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 4" variant="outlined" />
          <TextField onChange={(e) => { bannerImage5(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 5" variant="outlined" />
          <TextField onChange={(e) => { bannerImage6(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 6" variant="outlined" />
          <TextField onChange={(e) => { bannerImage7(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 7" variant="outlined" />
          <Button onClick={bannerDetails} sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
            Save
          </Button>
          {/* <TextField sx={inputStyle2} id="outlined-basic" label="Real Price" variant="outlined" /> */}
          {/* <TextField sx={inputStyle2} id="outlined-basic" label="Price" variant="outlined" /> */}
          {/* <TextField sx={inputStyle2} id="outlined-basic" label="Weight" variant="outlined" /> */}
        </Box>
      </Box>
    </Modal>
  );
}