import React, { useEffect, useState } from "react";
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
import *as Endpoint from '../Helper/Endpoint'

import Typography from "@mui/material/Typography";
import *as Constants from '../Helper/Constants'
import axios from "axios";
import AlifAlert from "./Alert";

export default function AddCouponModel(props) {

  const [couponname, setCouponname] = useState('')
  const [coupondiscount, setCoupondiscount] = useState('')
  const [maxdiscount, setMaxdiscount] = useState('')
  const [minpurchaseprice, setMinpurchaseprice] = useState('')
  const [expdate, setExpdate] = useState('')
  const [severity, setSeverity] = useState('error');
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('Something went wrong')

  const couponName = (e) => {
    console.log(e?.currentTarget?.value)
    setCouponname(e?.currentTarget?.value);
  }

  const couponDiscount = (e) => {
    console.log(e?.currentTarget?.value)
    setCoupondiscount(e?.currentTarget?.value);
  }

  const maxDiscount = (e) => {
    console.log(e?.currentTarget?.value)
    setMaxdiscount(e?.currentTarget?.value)
  }

  const minPurchasePrice = (e) => {
    console.log(e?.currentTarget?.value)
    setMinpurchaseprice(e?.currentTarget?.value)
  }

  const expDate = (e) => {
    console.log(e?.currentTarget?.value)
    setExpdate(e?.currentTarget?.value)
  }

  const couponDetails = () => {
    const data = {
      'couponName': couponname,
      'couponDiscount': coupondiscount,
      'minimumPurchasePrice': minpurchaseprice,
      'maximumDiscount': maxdiscount,
      'expireDate': expdate
    }
    console.log(data)

    const requestHeader = {
      Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`
    }
    axios.post(Endpoint.postCoupons(), data, {
      headers: requestHeader
    }).then((res) => {
      console.log(res?.data)
      setSeverity('success')
      setShow(true)
      setMessage('coupon saved successfully')
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
                Add Coupons
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
        <Box style={{ marginTop: '50px' }} >
          <AlifAlert
            severity={severity}
            show={show}
            message={message}
          />
        </Box>
        <Box sx={addCouponsMain} >
          <TextField onChange={(e) => { couponName(e) }} fullWidth sx={inputStyle} id="outlined-basic" label="Coupon Name" variant="outlined" value={couponname} />
          <Box>
            <TextField onChange={(e) => { couponDiscount(e) }} sx={inputStyle2} id="outlined-basic" label="Discount Percentage" variant="outlined"  value={coupondiscount} />
            <TextField onChange={(e) => { maxDiscount(e) }} sx={inputStyle2} id="outlined-basic" label="Max Discount" variant="outlined"  value={maxdiscount} />
            <TextField onChange={(e) => { minPurchasePrice(e) }} sx={inputStyle2} id="outlined-basic" label="Minimum purchase price" variant="outlined"x value={minpurchaseprice} />
            <TextField onChange={(e) => { expDate(e) }} sx={inputStyle2} id="outlined-basic" type={'date'} variant="outlined"  value={expdate} />
          </Box>
        </Box>
        <Button onClick={couponDetails} sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}

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

const addCouponsMain = {
  marginTop: '30px'
}