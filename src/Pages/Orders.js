import React from 'react'
import AlifTable from "../Components/AlifTable";

function createData(name, city, isActive, state, id) {
  return { name, city, isActive, state, id };
}

const rows = [
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 1),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 2),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 3),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 4),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 5),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 6),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 7),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 8),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 9),
  createData("Abdul Samad Kirmani", "Banda", true, "Uttar Pradesh", 10),
];

const column = [
  'OrderId', 'UserName', 'UserEmail', 'Products', 'Order Date', 'City', 'State','Delivery Date', 'Paid', 'Delivery status'
]

export default function Orders() {
  return (
    <>
    <AlifTable
      source={'order'}
      rows={rows}
      col={column}
    />
  </>
  )
}
