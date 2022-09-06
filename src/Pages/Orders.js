import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function createData(
  id,
  Username,
  couponName,
  orderDate,
  ArrivalDate,
  Source,
  Status,
  mode,
  total,
  paid
) {
  return {
    id,
    Username,
    couponName,
    orderDate,
    ArrivalDate,
    Source,
    Status,
    mode,
    total,
    paid,
  };
}

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

const rows = [
  createData(
    1,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    false
  ),
  createData(
    2,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    true
  ),
  createData(
    3,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    true
  ),
  createData(
    4,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    true
  ),
  createData(
    5,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    false
  ),
  createData(
    6,
    "Hiba Fatima Kirmani",
    "FIRST15",
    "12/12/22",
    "15/12/22",
    "Outside",
    "Placed",
    "COD",
    "1599",
    true
  ),
];

export default function Orders() {
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
                  {row.Username}
                </TableCell>
                <TableCell>{row.couponName}</TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.ArrivalDate}</TableCell>
                <TableCell>{row.Source}</TableCell>
                <TableCell>{row.Status}</TableCell>
                <TableCell>{row.mode}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  {row.paid === true ? (
                    <Chip size="small" label="paid" color="success" />
                  ) : (
                    <Chip size="small" label="unpaid" color="error" />
                  )}
                </TableCell>
                <TableCell>
                  <IconButton aria-label="fingerprint" color="secondary">
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
