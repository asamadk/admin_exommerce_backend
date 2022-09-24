import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddProductModel from "../Components/AddProductModel";
import { Box } from "@mui/system";


import * as Constants from '../Helper/Constants'
import * as Endpoint from '../Helper/Endpoint'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const column = [
  'Image', 'Id', 'Name', 'Category', 'Price', 'Real Price', 'Available', 'More'
]

export default function Product() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [products, setProducts] = useState([])
  const [singleProduct, setSingleProduct] = useState({})
  const [openProducts, setOpenProducts] = useState(false)
  
  
  const history = useHistory()
  
  useEffect(() => {
    if (Constants.isLoggedIn() == false) {
      history.push('/login')
    }
    axios.get(Endpoint.getAllProducts(0, 30)).catch((err) => {
      console.log(err)
    }).then((res) => {
      //
      setProducts(res.data.responseWrapper)
      
      for(let product of res.data.responseWrapper){
        product.open = false
      }
      // console.log(JSON.stringify(res.data.responseWrapper[0]))
    })
  }, [])
  
  const handleClick = (event) => {
    console.log('Product id = ',event.currentTarget.id)
    setAnchorEl(event.currentTarget)
    for(let product of products){
      if(event.currentTarget.id == product?.product_id){
        // product.open = Boolean(event.currentTarget)
        product.open = true
      }else{
        product.open = false
      }
    }
  };

  const editProductDtetails = (event) => {
    for(let product of products){
      if(event.currentTarget.id == product?.product_id){
        // setOpenOrder(true);
        console.log('click works')
        setSingleProduct(product)
        setOpenProducts(true)
      }
    }
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
    for(let product of products){
      product.open = false
    
    }
  };

  const handleProductModalClose = () => {
    setOpenProducts(false)
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {column?.map((col) => (
                <TableCell key={col}><b>{col}</b></TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.product_id}>
                <TableCell><Avatar alt="Remy Sharp" src={product.product_img1} /></TableCell>
                <TableCell>#{product.product_id}</TableCell>
                <TableCell component="th" scope="row">
                  {product.product_name}
                </TableCell>
                <TableCell>{product?.categoryModel?.category_Name}</TableCell>
                <TableCell>₹{product.product_price}</TableCell>
                <TableCell>₹{product.product_real_price}</TableCell>
                <TableCell>{product?.avaialable?.toString()}</TableCell>
                <TableCell>
                  <div>
                    <Button
                      id={product?.product_id}
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      <MoreVertIcon/>
                    </Button>
                    <Menu
                      id={product?.product_id}
                      anchorEl={anchorEl}
                      open={product?.open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem id={product.product_id} onClick={handleClose}>View</MenuItem>
                      <MenuItem id={product.product_id} onClick={editProductDtetails}>Edit</MenuItem>
                      <MenuItem id={product.product_id} onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{marginTop : '50px'}}>
        {openProducts && <AddProductModel product={singleProduct}  parentCallback={handleProductModalClose} />}
      </Box>
    </>
  )
}
