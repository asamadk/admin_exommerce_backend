import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function createData(id, name, categoryImageUrl, edit, del) {
  return { id, name, categoryImageUrl, edit, del };
}

const column = [
  'Id', 'Name', 'categoryImageUrl', 'Edit', 'Delete'
]

const rows = [
  createData(1, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(2, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(3, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(4, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(5, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(6, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(7, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(8, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(9, "Hiba Fatima Kirmani", "URL", 1, 0),
  createData(10, "Hiba Fatima Kirmani", "URL", 1, 0),
];

export default function Category() {
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
                {/* <TableCell>{row.discount}</TableCell>
                <TableCell>{row.maxDiscount}</TableCell>
                <TableCell>{row.expiryDate.toString()}</TableCell> */}
                <TableCell>{row.categoryImageUrl.toString()}</TableCell>
                <TableCell>
                  <Button variant="outlined" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell><Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
