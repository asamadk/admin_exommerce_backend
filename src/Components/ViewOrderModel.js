import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import AlifCircularLoader from "./AlifCircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AlifAlert from "./Alert";
import CloseIcon from "@mui/icons-material/Close";
import Card from '@mui/material/Card';
import Orders from "../Pages/Orders";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const style = {
  height: 700,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
  paddingBottom: '10px',
  overflowY: 'scroll'
};

const borderStyle = {
  borderBottom: '2px #f2f2f2 solid',
  marginBottom: 30
}

export default function ViewOrderModel(props) {

  useEffect(() => {
    populateOrderDetails(props.order)
  }, [])

  const [orderDate, setOrderDate] = useState('');
  const [arrivaldate, setArrivaldate] = useState('');
  const [loader, setLoader] = useState(false);
  const [severity, setSeverity] = useState('error')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('Something went wrong')

  const populateOrderDetails = (order) => {
    if (order == null) {
      return;
    }
    setOrderDate(new Date(order?.orderDate).toISOString().split('T')[0])
    setArrivaldate(new Date(order?.expectedArrivalDate).toISOString().split('T')[0])
  }

  const handleClose = () => {
    props.parentCallback();
  };

  const darkTheme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: "#673ab7",
      },
    },
  });

  console.log(props.order)

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Box style={{ marginTop: '70px', backgroundColor: 'white' }}>
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
                  View Order
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
          <Typography sx={{ fontSize: 25, mb: 3 }}>Order ID : {props?.order?.orderId}</Typography>
          <div style={{ display: 'flex', marginBottom: 10 }}>
            <Typography sx={{ marginRight: 6 }}>Order Date : {orderDate}</Typography>
            <AirplanemodeActiveIcon style={{ color: 'green' }}/>
            <Typography style={{ color: 'green' }}> Arrival Date : {arrivaldate}</Typography>
          </div>
          <div style={borderStyle}></div>

          {props?.order?.productModelList.map((product) => (
            <Box sx={{ width: '120vh', margin: 1, background: '#f2f2f2', borderRadius: 5 }}>
              <Box sx={{display: 'flex'}}>
                <Avatar sx={{ width: 40, height: 40, margin: 2 }} src={product?.product_img1} />
                <Typography sx={{ margin: 2, fontSize: 15, color: 'grey' }}>{product?.product_name}</Typography>
                <Typography sx={{ margin: 2, fontSize: 15, color: 'grey' }}>{product?.product_price}</Typography>
              </Box>
                <Typography>{product?.product_long_Desc?.productQuote}</Typography>
            </Box>
          ))}

          {/* /////////////////////////////////////////////////////////////////////////////////
           */}
          <div style={borderStyle}></div>
          <div style={{display : 'flex'}}>

          <div>
          <Typography>Order Coupon : {props?.order?.couponName}</Typography> 
          <Typography sx={{ marginRight: 100 }}>payment Mode : {props?.order?.paymentMode}</Typography> 
          <Typography sx={{ marginRight: 100 }}>Order Source : {props?.order?.orderSource}</Typography> 
          <Typography marginRight={100}>Order Status : {props?.order?.orderStatusString}</Typography> 
          </div>
          <div>
          <Typography sx={{ marginRight: 108 }}>Paid : {props?.order?.paid}</Typography> 
          <Typography sx={{ marginRight: 108 }}>price :{props?.order?.price} </Typography> 
          <Typography sx={{ marginRight: 108 }}>Order Tracking no. : {props?.order?.orderTrackingNumber}</Typography> 
          </div>
          </div>
          <div style={borderStyle}></div>
        </Box>
      </Modal>

    </>
  )
}