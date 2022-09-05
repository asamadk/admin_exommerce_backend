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

export default function AlifTable(props) {
  const [rows, setRows] = useState(props?.rows);
  const [column, setColumns] = useState(props?.col);
  const [source, setSource] = useState(props?.source);

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
          {rows?.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.isActive.toString()}</TableCell>
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
