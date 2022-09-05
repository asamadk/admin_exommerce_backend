import React from 'react'
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
            {rows?.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.discount}</TableCell>
                <TableCell>{row.maxDiscount}</TableCell>
                <TableCell>{row.expiryDate.toString()}</TableCell>
                <TableCell>{row.edit.toString()}</TableCell>
                <TableCell>{row.del.toString()}</TableCell>
                <TableCell>
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
