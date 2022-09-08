import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from "@mui/icons-material/Close";

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
  height: "fitContent",
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
    marginTop : '15px'
}

const inputStyle2 = {
    marginTop : '15px',
    marginRight : '5px'
}

const darkTheme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: '#673ab7',
      },
    },
  });

const bannerMainContainer = {
  marginTop : '30px'
}

export default function AddBannerModel(props) {
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
              Add Banner
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
        <Box sx={bannerMainContainer}>
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 1" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 2" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 3" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 4" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 5" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 6" variant="outlined" />
            <TextField fullWidth sx={inputStyle} id="outlined-basic" label="Banner img 7" variant="outlined" />
            <Button sx={saveButton} variant="contained" endIcon={<SaveIcon />}>
          Save
        </Button>
            {/* <TextField sx={inputStyle2} id="outlined-basic" label="Real Price" variant="outlined" /> */}
            {/* <TextField sx={inputStyle2} id="outlined-basic" label="Price" variant="outlined" /> */}
            {/* <TextField sx={inputStyle2} id="outlined-basic" label="Weight" variant="outlined" /> */}
        </Box>
      </Box>
    </Modal>
  );
}