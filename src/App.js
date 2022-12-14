import logo from "./logo.svg";
import "./App.css";
import * as Constants from "./Helper/Constants";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarTop from "./Components/NavbarTop";
import Login from "./Pages/Login";
import OrderBill from "./Components/OrderBill";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {localStorage.getItem(Constants.TOKEN) != null ? <NavbarTop /> : <Login/>}
        </Route>
        <Route path="/home">
          <NavbarTop />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path='/order/:id'>
          <OrderBill/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
