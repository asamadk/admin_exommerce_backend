import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Typography from "@mui/material/Typography";

const saveButton = {
  marginTop : '15px',
  backgroundColor : '#673ab7'
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 584,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
  overflowY : 'scroll'
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
    // mode: 'dark',
    primary: {
      main: "#673ab7",
    },
  },
});

const boxContainer = {
  border: "0.5px gray solid",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "15px",
};

const addOrderMain = {
  marginTop: "30px",
};

export default function AddOrderModel(props) {
  const handleClose = () => {
    props.parentCallback();
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
                Add Orders
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
        <Box sx={addOrderMain}>
          <TextField
            fullWidth
            sx={inputStyle}
            id="outlined-basic"
            label="Order coupons Name"
            variant="outlined"
          />
          <Box sx={boxContainer}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Dates
            </Typography>
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              type={"date"}
              variant="outlined"
              helperText="Order date"
            />
            <TextField
              sx={inputStyle2}
              id="outlined-basic"
              type={"date"}
              variant="outlined"
              helperText="Arrival date"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Paid"
            />
          </Box>
          <Box sx={boxContainer}>
          <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Source
            </Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Source"
            />
          </Box>
          <Box sx={boxContainer}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Order status"
            />
          </Box>

          <Box sx={boxContainer}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Payment mode"
            />
          </Box>
          <Box>
          <TextField
              sx={inputStyle2}
              id="outlined-basic"
              variant="outlined"
              label="Total price"
            />
          </Box>
          <Box sx={boxContainer}>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="User list"
            />
          </Box>
        </Box>
        <Button sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}
