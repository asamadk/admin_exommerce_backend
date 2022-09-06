import React from "react";
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

import Typography from "@mui/material/Typography";

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
  marginTop : '15px',
  backgroundColor : '#673ab7'
}

const addProductsMain = {
  marginTop : '30px'
}

export default function AddProductModel(props) {
  const [categories, setCategories] = React.useState("Shirts");

  const handleClose = () => {
    props.parentCallback();
  };

  const handleCategoryChange = () => {
    console.log("Change category");
  };

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
                Add Products
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
          <TextField
            fullWidth
            sx={inputStyle}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            sx={inputStyle2}
            id="outlined-basic"
            label="Real Price"
            variant="outlined"
          />
          <TextField
            sx={inputStyle2}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            sx={inputStyle2}
            id="outlined-basic"
            label="Weight"
            variant="outlined"
          />
          <TextField
            sx={inputStyle2}
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
          />
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="available"
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
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 1"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 2"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 3"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="Image url 4"
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
              sx={inputStyle2}
              id="outlined-basic"
              label="product Quote"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product composition"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product description"
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
              sx={inputStyle2}
              id="outlined-basic"
              label="product weave"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product mill"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product fabric shine"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product sizefit"
              variant="outlined"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              label="product washcare"
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
              value={categories}
              onChange={handleCategoryChange}
            ></Select>
          </Box>
        </Box>
        <Button sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}
