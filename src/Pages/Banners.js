import React, { useEffect, useState } from "react";
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { color } from "@mui/system";
import Stack from '@mui/material/Stack';
import axios from "axios";


const inputStyle = {
  marginTop: '15px',
  width: '120vh'
}

const bannerMainContainer = {
  marginTop: '30px',
  display: 'flex',
  border: '1px red solid'
}


export default function Banners() {

  // useEffect(() => {
  //   axios.get(Endpoint.getAllBanners).then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },[])

  return (
    <>
      <Table>
          <TableBody>
              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              {/* <TableRow>
              <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
              <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
              <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}></Box></TableCell>
                <TableCell component="th" scope="row"><TextField fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow> */}
          </TableBody>
        </Table>
    </>
  );
}