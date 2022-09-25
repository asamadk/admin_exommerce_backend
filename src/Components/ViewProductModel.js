import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import AlifCircularLoader from "./AlifCircularProgress";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { style } from "@mui/system";
import AlifAlert from "./Alert";
import CloseIcon from "@mui/icons-material/Close";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#673ab7"
    },
  },
});

export default function ViewProductModel(props) {
    const [loader, setLoader] = useState(false);
    const [severity, setSeverity] = useState('error')
    const [show, setShow] = useState(false)
    const [message, setMessage] = useState('Something went wrong')

    const handleClose = () => {
        props.parentCallback();
    };

    return (
        <>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                View Product
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
            </Modal>
        </>
    )
}