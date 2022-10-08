import React, { useEffect, useReducer, useState } from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ImageSelectComponent(props) {
  const [products, setProducts] = useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    setProducts(props.products);
  }, [rerender]);

  const saveProductst = () => {
    let data = props.products;
    let response = data.filter((data) => {
      return data.count > 0;
    });
    props.parentCallback(response);
  };

  const handleIncrement = (event, type) => {
    let prId = event.target.id;
    for (let i = 0; i < props.products.length; i++) {
      if (props.products[i].product_id == prId) {
        let temp = props.products[i].count;
        if (temp == null) {
          temp = parseInt(0);
        }
        setRerender(!rerender);
        if (type === "incr") {
          props.products[i].count = parseInt(temp) + 1;
        } else {
          props.products[i].count = parseInt(temp) - 1;
        }
      }
    }
  };

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
            <Box style={stepperStye}>
              <Button
                id={item.product_id}
                variant="outlined"
                sx={stepperButton}
                onClick={(e) => handleIncrement(e, "decr")}
              >
                -
              </Button>
              <Typography sx={textStyle}>{item.count}</Typography>
              <Button
                id={item.product_id}
                sx={stepperButton}
                variant="outlined"
                onClick={(e) => handleIncrement(e, "incr")}
              >
                +
              </Button>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
      <Box style={buttonContainerStyle}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#673ab7" }}
          onClick={saveProductst}
        >
          Add Products
        </Button>
      </Box>
    </>
  );
}

const textStyle = {
  marginRight: "5px",
  marginLeft: "5px",
  color: "gray",
};

const stepperButton = {
  padding: 0,
  height: 20,
  borderRadius: "3px",
  marginTop: "2px",
};

const stepperStye = {
  padding: 5,
  margin: "10px auto",
  border: "0.5px black solid",
  borderRadius: "3px",
  display: "flex",
};

const buttonContainerStyle = {
  margin: "0 auto",
  width: "fit-content",
};
