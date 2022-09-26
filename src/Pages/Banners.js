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
import AlifCircularLoader from "../Components/AlifCircularProgress";

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

  const [loader, setLoader] = useState(false)
  const [banner,setBanner] = useState({});

  useEffect(() => {
    setLoader(true)
    axios.get(Endpoint.getAllBanners()).then(res => {
      if(res.data?.responseWrapper != null && res.data?.responseWrapper.length > 0){
        console.log(res.data?.responseWrapper[0]);
        setBanner(res.data?.responseWrapper[0])
      }
      setLoader(false)
    }).catch(err => {
      setLoader(false)
      console.log(err)
    })
  },[])

  return (
    <>
    <AlifCircularLoader open={loader} />
      <Table>
          <TableBody>
              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg1} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg1} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg2} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg2} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg3} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg3} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg4} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg4} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg5} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg5} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg6} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg6} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>

              <TableRow>
                <TableCell><Box style={{border : '1px black solid', height : '50px'}}><img src={banner?.bannerimg7} /></Box></TableCell>
                <TableCell label='Banner 1' component="th" scope="row"><TextField value={banner?.bannerimg7} fullWidth></TextField></TableCell>
                <TableCell><Button sx={{backgroundColor : '#673ab7'}} variant="contained">Edit</Button></TableCell>
              </TableRow>
          </TableBody>
        </Table>
    </>
  );
}