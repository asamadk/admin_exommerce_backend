import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import LoginIcon from "@mui/icons-material/Login";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaidIcon from "@mui/icons-material/Paid";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import * as Data from "../Helper/Data";
import * as Constants from "../Helper/Constants";
import Body from "../Pages/Body";
import User from "../Pages/User";
import Orders from "../Pages/Orders";
import Coupon from "../Pages/Coupon";
import Category from "../Pages/Category";
import Product from "../Pages/Product";
import AddData from "../Pages/AddData";
import Login from "../Pages/Login";
import RedeemIcon from '@mui/icons-material/Redeem';
import CategoryIcon from '@mui/icons-material/Category';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 240;

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      main: '#673ab7',
    },
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function NavbarTop() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pageRef, setPageRef] = React.useState(Constants.DASHBOARD);
  const [navbarText, setNavbarText] = React.useState('Admin Dashboard');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const changePage = (event) => {
    console.log('changePage')
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {navbarText}
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {Data.NAVIGATION_DATA.map((text) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }} onClick={() => {
              setPageRef(text);
              setNavbarText(text
                );
            }} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text === Constants.DASHBOARD && <DashboardIcon />}
                  {text === Constants.USER && <AccountCircleIcon />}
                  {text === Constants.ORDERS && <PaidIcon />}
                  {text === Constants.COUPON && <RedeemIcon />}
                  {text === Constants.CATEGORY && <CategoryIcon />}
                  {text === Constants.PRODUCT && <CheckroomIcon />}
                  {text === Constants.ADD && <AddCircleIcon />}
                  {text === Constants.LOGIN && <LoginIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Body entry point */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        { pageRef === Constants.DASHBOARD &&  <Body/>}
        { pageRef === Constants.USER && 
          <div style={bodyContainer}>
            <User/>
          </div>
        }
        { pageRef === Constants.ORDERS &&  <Orders />}
        { pageRef === Constants.COUPON &&  <Coupon/>}
        { pageRef === Constants.CATEGORY &&  <Category/>}
        { pageRef === Constants.PRODUCT &&  <Product/>}
        { pageRef === Constants.ADD &&  <AddData />}
        { pageRef === Constants.LOGIN &&  <Login/>}
      </Box>
    </Box>
  );
}

const bodyContainer = {
  height : '500px',
  position : 'relative',
  right : '5%'
}
