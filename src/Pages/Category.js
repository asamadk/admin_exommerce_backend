import React, { useEffect, useReducer, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Constants from '../Helper/Constants'
import * as Endpoint from '../Helper/Endpoint'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';
import AlifCircularLoader from '../Components/AlifCircularProgress';
import AlifAlert from '../Components/Alert';
import { Box } from '@mui/system';
import AddCategoriesModel from '../Components/AddCategoriesModel';


function createData(id, name, categoryImageUrl, edit, del) {
  return { id, name, categoryImageUrl, edit, del };
}

const column = [
  'Image', 'Id','Name', 'Edit', 'Delete'
]

export default function Category() {

  const [openCategory, setOpenCategory] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loader, setLoader] = useState(false);
  const [singleCategory, setSingleCategory] = useState({})
  const [severity, setSeverity] = useState('error');
  const [show, setShow] = useState(false)
  const [message , setMessage] = useState('Something went wrong')
  const [reducerVavlue, forceUpdate] = useReducer(x => x + 1, 0)


  const history = useHistory()

  useEffect(() => {
    setLoader(true)
    if(Constants.isLoggedIn == false) {
      history.push('/login')
    }

    axios.get(Endpoint.getAllCategories(), {
    }).catch((err) => {
      console.log(err)
      setLoader(false)
    }).then((res) => {
      setLoader(false)
      if(res?.data?.responseWrapper !== null){
        // console.log(JSON.stringify(res.data.responseWrapper[0]))
        setCategories(res.data.responseWrapper)
      }
    })

  }, [reducerVavlue])

  const requestHeader = {
    Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`

  }

  const deletingCategory = (event) => {
    const categoryId = event?.currentTarget.id
    console.log(categoryId)
    setLoader(true)
    axios.delete(Endpoint.deleteCategory(categoryId), {
      headers : requestHeader
    }).then((res) => {
      console.log(res.data)
      setLoader(false)
      setMessage('Deleted Successfully')
      setSeverity('success')
      setShow(true)
      forceUpdate()
    }).catch((err) =>{
      console.log(err)
      setLoader(false)
      setShow(true)
      setMessage('Something went wrong')
      setSeverity('error')
    })

    setTimeout(() => {
      setShow(false)
    }, 2000)
  }
  ////////////////////////////////////////////////////////////////

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const editOrderDtetails = (event) => {
    for(let cat of categories){
      if(event.currentTarget.id == cat?.category_Id){
        setOpenCategory(true);
        console.log(cat?.category_Id)
        setSingleCategory(cat)
      }
    }
    handleClose();
  }

  const handleClose = () => {
    setAnchorEl(null);
    for(let cat of categories){
      cat.open = false
    }
  };

  const handleCategoryModalClose = () => {
    setOpenCategory(false)
  }

  //////////////////////////////////////////////////////////////

  return (
    <>
      <AlifCircularLoader open={loader}/>
      <TableContainer>
      <AlifAlert
          severity={severity}
          show={show}
          message={message}
        />
        <Table>
          <TableHead>
            <TableRow>
              {column?.map((col) => (
                <TableCell key={col}>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((category) => (
              <TableRow key={category.category_Id}>
                <TableCell><Avatar alt="Remy Sharp" src={category.category_image?.toString()} /></TableCell>
                <TableCell>#{category.category_Id}</TableCell>
                <TableCell component="th" scope="row">
                  {category.category_Name}
                </TableCell>
                <TableCell>
                  <Button onClick={editOrderDtetails} id={category.category_Id} sx={{backgroundColor : '#673ab7'}} variant="contained" startIcon={<EditIcon />}>
                    Edit
                  </Button>
                </TableCell>
                <TableCell><Button id={category.category_Id} onClick={deletingCategory} sx={{backgroundColor : '#673ab7'}} variant="contained" startIcon={<DeleteIcon />}>
                  Delete
                </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box  sx={{marginTop : '50px'}}>
        {openCategory && <AddCategoriesModel source={Constants.EDIT} cat={singleCategory} parentCallback={handleCategoryModalClose} /> }
       </Box>
    </>
  )
}
