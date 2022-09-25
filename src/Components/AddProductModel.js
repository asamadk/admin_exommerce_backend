import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Select from "@mui/material/Select";
import * as Endpoint from '../Helper/Endpoint'
import * as Constants from '../Helper/Constants'
import MenuItem from '@mui/material/MenuItem';
import AlifCircularLoader from "./AlifCircularProgress";
import AlifAlert from "./Alert";
import Typography from "@mui/material/Typography";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 584,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  marginTop: "15px",
};

const inputStyle2 = {
  marginTop: "15px",
  marginRight: "5px",
};

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#673ab7"
    },
  },
});

const urlBox = {
  border: "0.5px gray solid",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "15px",
};

const saveButton = {
  marginTop: '15px',
  backgroundColor: '#673ab7'
}

const addProductsMain = {
  marginTop: '50px'
}

export default function AddProductModel(props) {

  const [productname, setProductname] = useState('');
  const [productrealprice, setProductrealprice] = useState();
  const [productprice, setProductprice] = useState();
  const [weight, setWeight] = useState();
  const [quantity, setQuantity] = useState();
  const [imageurl1, setImageurl1] = useState();
  const [imageurl2, setImageurl2] = useState();
  const [imageurl3, setImageurl3] = useState();
  const [imageurl4, setImageurl4] = useState();
  const [productlongDesc, setProductlongDesc] = useState();
  const [productSmallDesc, setProductSmallDesc] = useState();
  const [category, setCategory] = useState([]);
  const [productQuote, setProductQuote] = useState()
  const [productComposition, setProductComposition] = useState()
  const [productDescription, setProductDescription] = useState()
  const [weave, setWeave] = useState();
  const [mill, setMill] = useState();
  const [fabricShine, setFabricShine] = useState();
  const [sizeFit, setSizeFit] = useState();
  const [washcare, setWashcare] = useState();
  const [categoryId, setCategoryId] = useState(230);
  const [loader, setLoader] = useState(false)
  const [severity, setSeverity] = useState('error')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('save Failed!')
  const [modalHeader, setModalHeader] = useState(props?.source)


  useEffect(() => {
    axios.get(Endpoint.getAllCategories()).then((res) => {
      setCategory(res?.data?.responseWrapper)
      populateProduct(props.product)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const populateProduct = (product) => {
    if (product == null) {
      return;
    }
    setProductname(product?.product_name)
    setProductrealprice(product?.product_real_price)
    setProductprice(product?.product_price)
    setWeight(product?.product_weight)
    setQuantity(product?.quantity)
    setImageurl1(product?.product_img1)
    setImageurl2(product?.product_img2)
    setImageurl3(product?.product_img3)
    setImageurl4(product?.product_img4)
    const longDesObj = JSON.parse(product?.product_long_Desc)
    const shortDesObj = JSON.parse(product?.product_small_Desc)
    setProductQuote(longDesObj?.productQuote)
    setProductComposition(longDesObj?.composition)
    setProductDescription(longDesObj?.description)
    setWeave(shortDesObj?.weave)
    setMill(shortDesObj?.mill)
    setFabricShine(shortDesObj['fabric shine'])
    setSizeFit(shortDesObj?.sizefit)
    setWashcare(shortDesObj?.washcare)
    setCategoryId(product?.categoryModel?.category_Id)
    console.log(product?.quantity)
  }

  const productName = (e) => {
    console.log(e.target.value)
    setProductname(e.target.value)
  }

  const realPrice = (e) => {
    console.log(e.target.value)
    setProductrealprice(e.target.value)
  }

  const price = (e) => {
    console.log(e.target.value)
    setProductprice(e.target.value)
  }

  const productWeight = (e) => {
    console.log(e.target.value)
    setWeight(e.target.value)
  }

  const productQuantity = (e) => {
    console.log(e.target.value)
    setQuantity(e.target.value)
  }

  const imageURL1 = (e) => {
    console.log(e.target.value)
    setImageurl1(e.target.value)
  }

  const imageURL2 = (e) => {
    console.log(e.target.value)
    setImageurl2(e.target.value)
  }

  const imageURL3 = (e) => {
    console.log(e.target.value)
    setImageurl3(e.target.value)
  }

  const imageURL4 = (e) => {
    console.log(e.target.value)
    setImageurl4(e.target.value)
  }

  const productQuo = (e) => {
    console.log(e.target.value)
    setProductQuote(e.target.value)
  }

  const productComp = (e) => {
    console.log(e.target.value)
    setProductComposition(e.target.value)
  }

  const productDes = (e) => {
    console.log(e.target.value)
    setProductDescription(e.target.value)
  }

  const productWeave = (e) => {
    console.log(e.target.value)
    setWeave(e.target.value)
  }

  const productMill = (e) => {
    console.log(e.target.value)
    setMill(e.target.value)
  }

  const productFabricShine = (e) => {
    console.log(e.target.value)
    setFabricShine(e.target.value)
  }

  const productSizeFit = (e) => {
    console.log(e.target.value)
    setSizeFit(e.target.value)
  }

  const productWashcare = (e) => {
    console.log(e.target.value)
    setWashcare(e.target.value)
  }

  const [categories, setCategories] = React.useState('');

  const handleClose = () => {
    props.parentCallback();
  };

  const handleCategoryChange = (e) => {
    console.log("Change category", e.target.value);
    setCategories(e.target.value)
  };

  const requestHeader = {
    Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`
  }

  const productDetails = () => {
    const data = {
      'product_name': productname,
      'product_real_price': productrealprice,
      'product_price': productprice,
      'product_weight': weight,
      'quantity': quantity,
      'product_img1': imageurl1,
      'product_img2': imageurl2,
      'product_img3': imageurl3,
      'product_img4': imageurl4,
      'product_long_Desc': JSON.stringify({
        'productQuote': productQuote,
        'composition': productComposition,
        'description': productDescription
      }),
      'product_small_Desc': JSON.stringify({
        'weave': weave,
        'mill': mill,
        'fabric shine': fabricShine,
        'sizefit': sizeFit,
        'washcare': washcare,

      })
    }
    console.log(data)

    axios.post(Endpoint.postProducts(categories), data, {
      headers: requestHeader
    }).then((res) => {
      console.log(res.data)
      setShow(true)
      setSeverity('success')
      setMessage('saved successfully')
      setTimeout(() => {
        handleClose()
      },2000)
    }).catch((err) => {
      console.log(err)
      setShow(true)
      setSeverity('error')
      setMessage('something went wrong')
      setTimeout(() => {
        setShow(false)
      },2000)
    })
  }

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {modalHeader == Constants.ADD && 'Add Product'}
                {modalHeader == Constants.EDIT && 'Edit Product'}
              </Typography>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        <Box sx={addProductsMain}>
          <AlifAlert
            severity={severity}
            show={show}
            message={message}
          />
          <TextField
            fullWidth
            onChange={(e) => { productName(e) }}
            sx={inputStyle}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={productname || ''}
          />
          <TextField
            onChange={(e) => { realPrice(e) }}
            sx={inputStyle2}
            id="outlined-basic"
            label="Real Price"
            variant="outlined"
            value={productrealprice || ''}
          />
          <TextField
            onChange={(e) => { price(e) }}
            sx={inputStyle2}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={productprice || ''}
          />
          <TextField
            onChange={(e) => { productWeight(e) }}
            sx={inputStyle2}
            id="outlined-basic"
            label="Weight"
            variant="outlined"
            value={weight || ''}
          />
          <TextField
            onChange={(e) => { productQuantity(e) }}
            sx={inputStyle2}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            value={quantity || ''}
          />
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="available"
            // value={availa}
            />
          </Box>
          <Box sx={urlBox}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              URLs
            </Typography>
            <TextField
              onChange={(e) => { imageURL1(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 1"
              variant="outlined"
              value={imageurl1 || ''}
            />
            <TextField
              onChange={(e) => { imageURL2(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 2"
              variant="outlined"
              value={imageurl2 || ''}
            />
            <TextField
              onChange={(e) => { imageURL3(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 3"
              value={imageurl3 || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { imageURL4(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 4"
              value={imageurl4 || ''}
              variant="outlined"
            />
          </Box>
          <Box sx={urlBox}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Product long description
            </Typography>
            <TextField
              onChange={(e) => { productQuo(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product Quote"
              value={productQuote || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productComp(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product composition"
              value={productComposition || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productDes(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product description"
              value={productDescription || ''}
              variant="outlined"
            />
          </Box>
          <Box sx={urlBox}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Product small description
            </Typography>
            <TextField
              onChange={(e) => { productWeave(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product weave"
              value={weave || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productMill(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product mill"
              value={mill || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productFabricShine(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product fabric shine"
              value={fabricShine || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productSizeFit(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product sizefit"
              value={sizeFit || ''}
              variant="outlined"
            />
            <TextField
              onChange={(e) => { productWashcare(e) }}
              sx={inputStyle2}
              id="outlined-basic"
              label="product washcare"
              value={washcare || ''}
              variant="outlined"
            />
          </Box>
          <Box sx={urlBox}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Categories
            </Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={categoryId || ''}
              onChange={(e) => { handleCategoryChange(e) }}
            >
              {
                category.map((cat) => {
                  return <MenuItem value={cat.category_Id}>{cat.category_Name}</MenuItem>
                })
              }
            </Select>
          </Box>
        </Box>
        <Button onClick={productDetails} sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}
