import React, { useState } from "react";
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


export default function AlifTable(props) {
  const [users, setUsers] = useState(props?.user);
  const [column, setColumns] = useState(props?.col);
  const [source, setSource] = useState(props?.source);

  console.log(props)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Users</caption>
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
                {source === "user" && (
                  <LoadingButton
                    size="small"
                    sx={{backgroundColor : '#673ab7'}}
                    loadingPosition="start"
                    startIcon={<LockIcon />}
                    variant="contained"
                  >
                    Change password
                  </LoadingButton>
                )}
                {source === "order" && (
                  <Button variant="outlined" startIcon={<AddIcon />}>View More</Button> 
                )}
              </TableCell>
              <TableCell>
                {source === 'user' &&
                <FormControlLabel
                  sx={{ display: "block" }}
                  control={<Switch name="loading" color="primary" />}
                />
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
