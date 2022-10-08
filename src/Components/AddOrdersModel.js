import React, { useEffect, useState } from "react";
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
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Typography from "@mui/material/Typography";
import * as Endpoint from "../Helper/Endpoint";
import * as Constants from "../Helper/Constants";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import AlifCircularLoader from "./AlifCircularProgress";
import AlifAlert from "./Alert";
import ImageSelectComponent from "./ImageSelectComponent";

const paymentMode = ["COD", "online"];
const orderStat = [
  "Pending payment",
  "Failed",
  "Processing",
  "In Transit",
  "Shipped",
  "Delivered",
  "Placed",
];

const orderSource = ["Internal", "Enternal"];

const saveButton = {
  marginTop: "15px",
  backgroundColor: "#673ab7",
};

const style = {
  marginTop: "30px",
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
  overflowY: "scroll",
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
  marginTop: "50px",
};

export default function AddOrderModel(props) {
  const [totalPrice, setTotalPrice] = useState();
  const [orderDate, setOrderDate] = useState("");
  const [arrivaldate, setArrivaldate] = useState("");
  const [orderTrackingNum, setOrderTrackingNum] = useState(1);
  const [category, setCategory] = useState([]);
  const [productList, setProductList] = useState([]);
  const [paid, setPaid] = useState(false);
  const [payMode, setPayMode] = useState("COD");
  const [orderStatus, setOrderStatus] = useState("Placed");
  const [coupon, setCoupon] = useState([]);
  const [orderCoupon, setOrderCoupon] = useState("");
  const [loader, setLoader] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [show, setShow] = useState(false);
  const [orderProductList, setOrderPRoductList] = useState([]);
  const [message, setMessage] = useState("Something went wrong");
  const [modalHeader, setModalHeader] = useState(props?.source);
  const [source,setSource] = useState('');

  useEffect(() => {
    setLoader(true);
    fetchProducts();
    fetchCategories();
    fetchCoupons();
    populateOrder(props.order);
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get(Endpoint.getAllProducts(0, 30)).catch((err) => {
      console.log(`Error is ${err}`);
      setLoader(false);
    });
    setLoader(false);
    if (res == null) return;
    setProductList(res.data?.responseWrapper);
  };

  const populateOrder = (order) => {
    if (order == null) {
      return;
    }
    setOrderDate(new Date(order?.orderDate).toISOString().split("T")[0]);
    setArrivaldate(
      new Date(order?.expectedArrivalDate).toISOString().split("T")[0]
    );
    setPaid(order?.paid);
    setOrderStatus(order?.orderStatusString);
    setPayMode(order?.paymentMode);
    setTotalPrice(order?.price);
    setOrderCoupon(order?.couponName);
  };

  const fetchCategories = () => {
    axios
      .get(Endpoint.getAllCategories())
      .then((res) => {
        setCategory(res?.data?.responseWrapper);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCoupons = () => {
    axios
      .get(Endpoint.getAllCoupons())
      .then((res) => {
        setCoupon(res?.data?.responseWrapper);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trackingNum = (e) => {
    console.log(e.target.value);
    setOrderTrackingNum(e.target.value);
  };

  const orderdate = (e) => {
    console.log(e.target.value);
    setOrderDate(e.target.value);
  };

  const arrivalDate = (e) => {
    console.log(e.target.value);
    setArrivaldate(e.target.value);
  };

  const totalprice = (e) => {
    console.log(e.target.value);
    setTotalPrice(e.target.value);
  };

  const paidOrNot = (e) => {
    console.log(e.target.checked);
    setPaid(e.target.checked);
  };

  const handleCoupons = (e) => {
    console.log(e.target.value);
    setOrderCoupon(e.target.value);
  };

  const [categories, setCategories] = React.useState("");

  const requestHeader = {
    Authorization: `Bearer ${localStorage.getItem(Constants.TOKEN)}`,
  };

  const orderDetails = () => {
    const data = {
      price: totalPrice,
      orderDate: orderDate,
      orderTrackingNumber: orderTrackingNum,
      orderStatusString: orderStatus,
      expectedArrivalDate: arrivaldate,
      razorpay_order_id: "",
      couponName: orderCoupon,
      paymentMode: payMode,
      orderSource: source,
      paid: paid.toString(),
      productModelList: orderProductList,
    };

    setLoader(true);

    axios
      .post(Endpoint.postOrders(142), data, {
        headers: requestHeader,
      })
      .then((res) => {
        console.log("order data for view", res.data);
        setLoader(false);
        setSeverity("success");
        setShow(true);
        setMessage("Saved Successfully");
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
        setShow(true);
        setMessage("Something went wrong");
        setSeverity("error");
      });

    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    props.parentCallback();
  };

  const handleProductSelection = (data) => {
    console.log("handleProductSelection data = ", data);
    if (data == null || data.length < 1) {
      return;
    }
    let temp = [];
    data.forEach((d) => {
      let end = parseInt(d.count);
      for (let i = 1; i <= end; i++) {
        temp.push(d);
      }
      delete d.count;
    });

    console.log("TEMP = ", temp);
    setOrderPRoductList(temp);
  };

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box style={{ marginTop: "50px" }}>
          <AlifAlert severity={severity} show={show} message={message} />
        </Box>
        <AlifCircularLoader open={loader} />
        <ThemeProvider theme={darkTheme}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {modalHeader == Constants.ADD && "Add Order"}
                {modalHeader == Constants.EDIT && "Edit Order"}
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
          <Box sx={boxContainer}>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              Dates
            </Typography>
            <TextField
              onChange={(e) => {
                orderdate(e);
              }}
              sx={inputStyle2}
              id="outlined-basic"
              type={"date"}
              variant="outlined"
              value={orderDate}
              helperText="Order date"
            />
            <TextField
              onChange={(e) => {
                arrivalDate(e);
              }}
              sx={inputStyle2}
              id="outlined-basic"
              type={"date"}
              variant="outlined"
              value={arrivaldate}
              helperText="Arrival date"
            />
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Switch
                  onChange={(e) => {
                    paidOrNot(e);
                  }}
                  checked={paid}
                />
              }
              label="Paid"
              value={paid}
            />
          </Box>
          <Box sx={boxContainer}>
            <Typography>Order status</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Order status"
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
            >
              {orderStat.map((status) => {
                return <MenuItem value={status}>{status}</MenuItem>;
              })}
            </Select>
          </Box>

          <Box sx={boxContainer}>
            <Typography>Payment mode</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Payment mode"
              value={payMode}
              onChange={(e) => setPayMode(e.target.value)}
            >
              {paymentMode.map((payment) => {
                return <MenuItem value={payment}>{payment}</MenuItem>;
              })}
            </Select>
          </Box>
          <Box>
            <TextField
              onChange={(e) => {
                totalprice(e);
              }}
              sx={inputStyle2}
              id="outlined-basic"
              variant="outlined"
              label="Total price"
              value={totalPrice}
            />

            <TextField
              onChange={(e) => {
                setSource(e.target.value);
              }}
              sx={inputStyle2}
              id="outlined-basic"
              variant="outlined"
              label="Source User"
              value={source}
            />
          </Box>
          <Box sx={boxContainer}>
            <Typography>Coupon</Typography>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="User list"
              value={orderCoupon}
              onChange={(e) => handleCoupons(e)}
            >
              {coupon.map((coup) => {
                return (
                  <MenuItem value={coup.couponName}>{coup.couponName}</MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box sx={boxContainer}>
            <ImageSelectComponent
              parentCallback={(data) => handleProductSelection(data)}
              products={productList}
            />
          </Box>
        </Box>
        <Button
          onClick={orderDetails}
          sx={saveButton}
          variant="contained"
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Box>
    </Modal>
  );
}
