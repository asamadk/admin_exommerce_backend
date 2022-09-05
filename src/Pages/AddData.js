import React, { useState } from "react";
import * as Constants from "../Helper/Constants";
import * as Data from '../Helper/Data'

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddProductModel from "../Components/AddProductModel";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

let addItems = [
  "Products",
  "Coupons",
  "Orders",
  "Banner",
  "Size Option",
  "Categories",
];

export default function AddData() {
  const [productModal, setProductModal] = useState(false);

  const handleAddContainer = (text) => {
    console.log(text);
    if (text === Constants.ADD_PRODUCTS) {
      setProductModal(true);
    }
  };

  const handleProductModalClose = () => {
    setProductModal(false);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {addItems.map((text, index) => (
            <Grid
              onClick={() => handleAddContainer(text)}
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
            >
              <Item
                sx={{
                  minWidth: 275,
                  maxWidth: 512,
                  // "#673ab7"
                  backgroundColor: Data.COLORS[Math.floor(Math.random() * (6 - 0 + 1) + 0 )],
                  height: 184,
                  borderRadius: 4,
                  paddingTop: 8,
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{ color: "#E3F2FD" }}
                  variant="h4"
                  component="h2"
                >
                  {text}
                </Typography>
                <AddBoxIcon style={{ color: "#E3F2FD", margin: 20 }} />
              </Item>
            </Grid>
          ))}
        </Grid>
        { productModal && <AddProductModel parentCallback={handleProductModalClose} /> }
      </Box>
    </>
  );
}
