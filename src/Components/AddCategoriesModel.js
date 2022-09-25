import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import *as Endpoint from '../Helper/Endpoint'
import *as Constants from '../Helper/Constants'

import Typography from "@mui/material/Typography";
import axios from "axios";
import AlifCircularLoader from "./AlifCircularProgress";
import AlifAlert from "./Alert";

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

const saveButton = {
  marginTop: '15px',
  backgroundColor: '#673ab7'
}

const inputStyle = {
  marginTop: '15px'
}

const inputStyle2 = {
  marginTop: '15px',
  marginRight: '5px'
}

const bannerMainContainer = {
  marginTop: '30px'
}

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#673ab7',
    },
  },
});

export default function AddCategoriesModel(props) {

  const [categoryname, setCategoryname] = useState()
  const [categoryimg, setCategoryimg] = useState()
  const [loader, setLoader] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('save Failed!')
  const [modalHeader, setModalHeader] = useState(props?.source)

  useEffect(() => {
    axios.get(Endpoint.getAllCategories()).then((res) => {
      populateCategory(props.cat)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const populateCategory = (cat) => {
    if(cat == null) {
      return;
    }
    // console.log(cat)
    setCategoryname(cat.category_Name)
    setCategoryimg(cat.category_image)
  }

  const categoryName = (e) => {
    console.log(e.target.value)
    setCategoryname(e.target.value)
  }

  const categoryImg = (e) => {
    console.log(e.target.value)
    setCategoryimg(e.target.value)
  }

  const categoryDetails = () => {
    const data = {
      'category_Name': categoryname,
      'category_image': categoryimg
    }
    console.log(data)
    setLoader(true)

    const requestHeader = {
      Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`
    }

    axios.post(Endpoint.postCategories(), data, {
      headers: requestHeader
    }).then((res) => {
      console.log(res.data)
      feedbackUser(false);
      setShow(true)
      setSeverity('success')
      setMessage('saved successfully')
      setTimeout(() => {
        handleClose()
      },2000)
    }).catch((err) => {
      console.log(err)
      setShow(true)
      setSeverity('error')
      setMessage('something went wrong')
      feedbackUser(false)
    })
  }

  const feedbackUser = (val) => {
    setLoader(val)
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
        <Box style={{marginTop : '50px'}}>
        <AlifAlert
          severity={severity}
          show={show}
          message={message}
        />
        </Box>
        <AlifCircularLoader open={loader} />
        <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {modalHeader == Constants.ADD && 'Add Category'}
                {modalHeader == Constants.EDIT && 'Edit Category'}
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
        </ThemeProvider>
        <Box sx={bannerMainContainer} >
          <TextField value={categoryname || ''} onChange={(e) => { categoryName(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Category Name" variant="outlined" />
          <TextField value={categoryimg || ''} onChange={(e) => { categoryImg(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Category img" variant="outlined" />
          <Button onClick={categoryDetails} sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}