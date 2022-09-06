import React, { useState } from "react";
import * as Constants from "../Helper/Constants";
// import * as Data from '../Helper/Data'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import AddBoxIcon from "@mui/icons-material/AddBox";
import AddProductModel from "../Components/AddProductModel";
import AddCouponModel from "../Components/AddCouponModel";
import AddOrderModel from "../Components/AddOrdersModel";
import AddBannerModel from "../Components/AddBannerModel";
import AddSizeOptionModel from "../Components/AddSizeOptionModel";
import AddCategoriesModel from "../Components/AddCategoriesModel";


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
  const [couponModal, setCouponModal] = useState(false)
  const [orderModal, setOrderModal] = useState(false)
  const [bannerModal, setBannerModal] = useState(false)
  const [sizeOptionModal, setSizeOptionModal] = useState(false)
  const [categoriesModal, setCategoriesModal] = useState(false)

  const handleAddContainer = (text) => {
    console.log(text);
    if (text === Constants.ADD_PRODUCTS) {
      setProductModal(true);
    }else if(text === Constants.ADD_COUPONS) {
      setCouponModal(true);
    }else if(text === Constants.ADD_ORDERS) {
      // console.log('aa raha hai')
      setOrderModal(true);
    }else if(text === Constants.ADD_BANNER) {
      setBannerModal(true);
      console.log('aa raha hai')
    }else if(text === Constants.ADD_SIZE_OPTION) {
      setSizeOptionModal(true);
    }else if(text === Constants.ADD_CATEGORIES) {
      setCategoriesModal(true);
    }
  };

  const handleProductModalClose = () => {
    setProductModal(false);
  }

  const handleCouponModalClose = () => {
    setCouponModal(false);
  }

  const handleOrderModalClose = () => {
    setOrderModal(false);
  }

  const handleBannerModalClose = () => {
    setBannerModal(false);
  }

  const handleSizeOptionModalClose = () => {
    setSizeOptionModal(false);
  }

  const handleCategoriesModalClose = () => {
    setCategoriesModal(false);
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
              item
              xs={2}
              sm={4}
              md={4}
              key={index}
            >
              <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleAddContainer(text)} variant="contained" sx={saveButton} >ADD</Button>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
        {productModal && <AddProductModel parentCallback={handleProductModalClose} />}
        {couponModal && <AddCouponModel parentCallback={handleCouponModalClose} />}
        {orderModal && <AddOrderModel parentCallback={handleOrderModalClose} />}
        {bannerModal && <AddBannerModel parentCallback={handleBannerModalClose} />}
        {sizeOptionModal && <AddSizeOptionModel parentCallback={handleSizeOptionModalClose} />}
        {categoriesModal && <AddCategoriesModel parentCallback={handleCategoriesModalClose} />}
      </Box>
    </>
  );
}

const saveButton = {
  backgroundColor : '#673ab7',
  color : '#ffffff'
}
