import React, { useEffect, useReducer, useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import { Button, Checkbox } from "@mui/material";
import { Box } from "@mui/system";

export default function ImageSelectComponent(props) {

  const [productListIds, setProductIds] = useState([]);

  const handleImageClick = (e) => {
    const productId = e.target.id;
    const isChecked = e.target.checked;
    if (isChecked === true) {
      addProductToOrder(productId);
    } else {
      removeProductFromOrder(productId);
    }
  };

  const addProductToOrder = (productId) => {
    productListIds.push(productId);
    console.log('addProductToOrder',productListIds)
  };

  const removeProductFromOrder = (productId) => {
    console.log(productId + " : removeProductFromOrder");
    let temp = productListIds.filter(proId => {
      return proId != productId
    });

    console.log('TEMP',temp)
    setProductIds(temp);
  };

  const saveProductst = () => {
    props.parentCallback(productListIds);
  }

  return (
    <>
      <ImageList cols={5}>
        {props.products.map((item) => (
          <ImageListItem id={item.product_id} key={item.product_id}>
            <img
              style={{ cursor: "pointer" }}
              src={`${item.product_img1}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.product_img1}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.product_name}
              loading="lazy"
            />
            <Checkbox id={item.product_id} onClick={handleImageClick} />
          </ImageListItem>
        ))}
      </ImageList>
      <Box style={buttonContainerStyle}>
        <Button variant="contained" sx={{backgroundColor: "#673ab7",}} onClick={saveProductst} >Add Products</Button>
      </Box>
    </>
  );
}

const buttonContainerStyle = {
  margin: '0 auto',
  width: 'fit-content'
}
