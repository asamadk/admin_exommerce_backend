import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Constants from '../Helper/Constants'
import * as Endpoint from '../Helper/Endpoint'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import axios from 'axios';

function createData( id, name, discount, maxDiscount, expiryDate, edit, del) {
  return { id, name, discount, maxDiscount, expiryDate, edit, del };
}

const column = [
  'Id', 'Name', 'Discount', 'Max Discount', 'ExpiryDate', 'Edit', 'Delete'
]

const rows = [
  createData(1, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(2, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(3, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(4, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(5, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(6, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(7, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(8, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(9, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
  createData(10, "Hiba Fatima Kirmani", "20%", "30%", "02-07-1999", 1, 0),
];

export default function Coupon() {

  const [coupons , setCoupons] = useState();

  const history = useHistory()

  useEffect(() => {
    if(Constants.isLoggedIn == false) {
      history.push('/login')
    }

    const requestHeader = {
      Authorization : `Bearer ${localStorage.getItem(Constants.TOKEN)}` 
    }
    
    axios.get(Endpoint.getAllCoupons(), {
      headers : requestHeader
    }).catch((err) => {
      console.log(err)
    }).then((res) => {
      if(res?.data?.responseWrapper !== null){
        // console.log(JSON.stringify(res.data.responseWrapper[0]))
        setCoupons(res.data.responseWrapper)
      }
    })
  }, [])

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {column?.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons?.map((coupon) => (
              <TableRow key={coupon.couponsId}>
                <TableCell>{coupon.couponsId}</TableCell>
                <TableCell component="th" scope="row">
                  {coupon.couponName}
                </TableCell>
                <TableCell>{coupon?.couponDiscount}</TableCell>
                <TableCell>{coupon?.maximumDiscount}</TableCell>
                <TableCell>{coupon?.expireDate?.toString()}</TableCell>
                <TableCell>
                <Button sx={{backgroundColor : '#673ab7'}} variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                <Button sx={{backgroundColor : '#673ab7'}} variant="contained" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
