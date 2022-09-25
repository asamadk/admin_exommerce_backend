import React, { useEffect, useReducer, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import { useHistory } from "react-router-dom";
import axios from "axios";
import AddOrderModel from "../Components/AddOrdersModel";
import { Box } from "@mui/system";
import AlifAlert from "../Components/Alert";
import CircularProgress from '@mui/material/CircularProgress';
import AlifCircularLoader from "../Components/AlifCircularProgress";
import ViewOrderModel from "../Components/ViewOrderModel";


const column = [
  "Id",
  "Username",
  "Order Coupon Name",
  "Ordere Date",
  "Arrival Date",
  "Source",
  "Status",
  "Payment Mode",
  "Total",
  "Paid",
  "More",
];

export default function Orders() {

  const [orders, setOrders] = useState([])
  const [openOrder, setOpenOrder] = useState(false);
  const [singleOrder, setSingalOrder] = useState({})
  const [severity, setSeverity] = useState('error')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('Something went wrong')
  const [loader, setLoader] = useState(false)
  const [reducerVavlue, forceUpdate] = useReducer(x => x + 1, 0)
  const [viewOrderOpen, setViewOrderOpen] = useState(false)


  const history = useHistory()

  const requestHeader = {
    Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`

  }

  useEffect(() => {
    setLoader(true)
    if (Constants.isLoggedIn() == false) {
      history.push('/Login')
    }
    console.log('inside use effect')
    axios.get(Endpoint.getAllOrders(), {
      headers: requestHeader
    }).catch((err) => {
      console.log(err)
      setLoader(false)
    }).then((res) => {
      setLoader(false)
      // forceUpdate()
      // console.log(res?.data?.responseWrapper)
      if (res?.data?.responseWrapper !== null) {
        setOrders(res.data.responseWrapper);
      }
      console.log(orders[0])
    })

  }, [reducerVavlue])

  const deletingOrders = (event) => {

    const orderId = event?.currentTarget?.id
    axios.delete(Endpoint.deleteOrderById(orderId), {
      headers: requestHeader
    }).then((res) => {
      forceUpdate()
      // console.log(orders.length)
      setSeverity('success')
      setShow(true)
      setMessage('Deleted Successfully')
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
      setSeverity('error')
      setShow(true)
      setMessage('Something went wrong')
    })

    setTimeout(() => {
      setShow(false)
    }, 2000)

  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    for (let order of orders) {
      if (event.currentTarget.id == order?.orderId) {
        order.open = true
      } else {
        order.open = false
      }
    }
  };

  const editOrderDtetails = (event) => {
    for (let order of orders) {
      if (event.currentTarget.id == order?.orderId) {
        setOpenOrder(true);
        setSingalOrder(order)
      }
    }
    handleClose();
  }

  const viewOrderDetails = (event) => {
    for (let order of orders) {
      if (event.currentTarget.id == order?.orderId) {
        setViewOrderOpen(true);
        setSingalOrder(order)
      }
    }
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
    for (let order of orders) {
      order.open = false
    }
  };

  const handleOrderModalClose = () => {
    setOpenOrder(false)
    setViewOrderOpen(false)
  }

  return (
    <>
      <AlifCircularLoader open={loader} />
      <TableContainer>
        <AlifAlert
          severity={severity}
          show={show}
          message={message}
        />
        <Table>
          <TableHead>
            <TableRow>
              {column?.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order) => (
              <TableRow key={order?.orderId}>
                <TableCell>#{order?.orderId}</TableCell>
                <TableCell component="th" scope="row">
                  {order?.userModel?.user_Fname}
                </TableCell>
                <TableCell>{order?.couponName}</TableCell>
                <TableCell>{new Date(order?.orderDate).toDateString()}</TableCell>
                <TableCell>{new Date(order?.expectedArrivalDate).toDateString()}</TableCell>
                <TableCell>{order?.orderSource}</TableCell>
                <TableCell>{order?.orderStatus}</TableCell>
                <TableCell>{order?.paymentMode}</TableCell>
                <TableCell>₹{order?.price}</TableCell>
                <TableCell>
                  {order?.paid === true ? (
                    <Chip size="small" label="paid" color="success" />
                  ) : (
                    <Chip size="small" label="unpaid" color="error" />
                  )}
                </TableCell>
                <TableCell>
                  <Button aria-label="fingerprint" color="secondary"
                    id={order?.orderId}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <MoreVertIcon />

                  </Button>
                  <Menu
                    id={order?.orderId}
                    anchorEl={anchorEl}
                    open={order?.open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem id={order?.orderId} onClick={viewOrderDetails}>View</MenuItem>
                    <MenuItem id={order?.orderId} onClick={editOrderDtetails}>Edit</MenuItem>
                    <MenuItem id={order?.orderId} onClick={deletingOrders}>Delete</MenuItem>
                    <MenuItem id={order?.orderId} onClick={handleClose}>Generate Bill</MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ marginTop: '50px' }}>
        {openOrder && <AddOrderModel source={Constants.EDIT} order={singleOrder} parentCallback={handleOrderModalClose} />}
        {viewOrderOpen && <ViewOrderModel source={Constants.VIEW} order={singleOrder} parentCallback={handleOrderModalClose} />}
      </Box>
    </>
  );
}
