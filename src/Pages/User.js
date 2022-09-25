import React, { useEffect, useState } from "react";
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AlifCircularLoader from "../Components/AlifCircularProgress";


export default function User() {

  const [users, setUsers] = useState([])
  const history = useHistory()
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setLoader(true)
    if (Constants.isLoggedIn == false) {
      history.push('/login');
    }

    const requestHeader = {
      Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`

    }
    axios.get(Endpoint.getAllUsers(), {
      headers: requestHeader
    }).catch((err) => {
      console.log(err)
      setLoader(false)
    }).then((res) => {
      setLoader(false)
      if (res?.data?.responseWrapper !== null) {
        setUsers(res.data.responseWrapper)
      }
    })
  }, [])

  const column = [
    'Id', 'Name', 'City', 'State', 'IsActive', 'Password Action', 'Block Action'
  ]

  return (
    <>
    <AlifCircularLoader open={loader} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              {column?.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.user_id}>
                <TableCell>{user.user_id}</TableCell>
                <TableCell component="th" scope="row">
                  {user.user_Fname}
                </TableCell>
                <TableCell>{user.user_City}</TableCell>
                <TableCell>{user.user_State}</TableCell>
                <TableCell>{'2'}</TableCell>
                <TableCell>
                  <LoadingButton
                    size="small"
                    sx={{ backgroundColor: '#673ab7' }}
                    loadingPosition="start"
                    startIcon={<LockIcon />}
                    variant="contained"
                  >
                    Change password
                  </LoadingButton>
                </TableCell>
                <TableCell>
                  <FormControlLabel
                    sx={{ display: "block" }}
                    control={<Switch name="loading" color="primary" />}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
