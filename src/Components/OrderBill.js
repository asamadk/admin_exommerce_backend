import React, { useEffect, useState } from "react";
import { Col, Divider, Row, Table } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import AlifTable from "./AlifTable";

const col = ['Items', 'Description','Quantity', 'Price'];

export default function OrderBill() {
  const history = useHistory();
  const printRef = React.useRef();
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [city,setCity] = useState('');
  const [country,setCountry] = useState('');
  const [zip,setZip] = useState('');

  useEffect(() => {
    console.error('INSIDE EFFECT BILL')
    const order = history.location.state?.data;
    setOrder(order);
    setFirstName(order.userModel?.user_Fname);
    setLastName(order.userModel?.user_Lname);
    setCity(order.userModel?.user_City);
    setCountry(order.userModel?.user_country)
    setZip(order?.userModel?.user_zip)
    populateProducts(order);
  }, [order]);

  const populateProducts = (order) => {
    let products = order?.productModelList;
    let temp = [];
    products.forEach((pro) => {
      temp.push({
        id: pro.product_id,
        name: pro.product_name,
        description: pro?.categoryModel?.category_Name,
        price: pro?.product_real_price,
        quantity: 1,
      });
    });
    setProducts(temp);
  };

  const handleNameChange = (e) => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
    order.userModel.user_Fname = firstName
    order.userModel.user_Lname = lastName
    order.userModel.user_City = city
    order.userModel.user_country = country
    order.userModel.user_zip = zip

  }

  return (
    <div ref={printRef}>
      <Row>
        <Col style={styleFooter}>
          <Divider>Invoice</Divider>
          <Divider>GSTN : 09ACDPH2973A1ZX</Divider>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <h3>Address</h3>
          <div>Near V-Mart, Goolar Naka</div>
          <div>Mayur Talies Road</div>
          <div>Banda, Uttar Pradesh</div>
          <div>India, 210001</div>
        </Col>
        <Col span={8} offset={8}>
          <h3>Order Details</h3>
          <div>Id :#{order?.orderId} </div>
          <div>
            Order date : {new Date(order?.orderDate).toLocaleDateString()}
          </div>
          <div>
            Arrival Date:{" "}
            {new Date(order?.expectedArrivalDate).toLocaleDateString()}
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: 15 }}>
        Bill To:{" "}
        {!editMode && (
          <strong style={{ cursor: "pointer" }} onClick={handleNameChange}>
            {order?.userModel?.user_Fname}
            {" "}
            {order?.userModel?.user_Lname}
          </strong>
        )}
        {editMode && (
          <div>
            <input
              style={{ marginRight: "5px" }}
              placeholder="Enter first  name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              style={{ marginRight: "5px" }}
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        )}
      </div>
      <Row style={{ marginTop: 2 }}>
        {!editMode && (
          <div>
            <div>{order?.userModel?.user_City},</div>
            <div>
              {order?.userModel?.user_country} - {order?.userModel?.user_zip}
            </div>
          </div>
        )}
        {editMode && (
          <div>
            <input
              style={{ marginRight: "5px" }}
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
            <input
              style={{ marginRight: "5px" }}
              placeholder="Enter country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            ></input>
            <input 
              placeholder="zip code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            ></input>
            <button onClick={handleSave}>Save</button>
          </div>
        )}
      </Row>

      <Row style={tableStyle}>
        <Table style={{width : '100%'}} dataSource={products} pagination={false}>
          <Table.Column title="Items" dataIndex="name" />
          <Table.Column title="Description" dataIndex="description" />
          <Table.Column title="Quantity" dataIndex="quantity" />
          <Table.Column title="Price" dataIndex="price" />
        </Table>
      </Row>

      <Row style={{ marginTop: 20, marginLeft : '30%' }}>
        <Col span={8} offset={16}>
          <table>
            {/* <tr>
              <th>Gross Total :</th>
              <td>Rs.{order?.price}</td>
            </tr> */}
            <tr>
              <th>Net Total :</th>
              <td>Rs. {order?.price}</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col style={styleFooter}>
          <Divider>ALIF CLOTHING</Divider>
          <Divider>Thank you for buying from us</Divider>
        </Col>
      </Row>

      <Row style={styleFooter}>
        <img
          style={styleLogo}
          alt="alif logo"
          src="https://i.postimg.cc/kMxpqx6t/Alif-Logo-Main.png"
        ></img>
      </Row>
    </div>
  );
}

const tableStyle = {
  width: "100%",
  marginTop: 50,
  border: "0.5px #D3D3D3 solid",
};

const styleLogo = {
  width: 120,
  height: 100,
};

const styleFooter = {
  width: "fit-content",
  margin: "0 auto",
};
