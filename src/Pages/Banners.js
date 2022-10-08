import React, { useEffect, useState } from "react";
import * as Endpoint from "../Helper/Endpoint";
import * as Constants from "../Helper/Constants";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import { color } from "@mui/system";
import Stack from "@mui/material/Stack";
import axios from "axios";
import AlifCircularLoader from "../Components/AlifCircularProgress";

const inputStyle = {
  marginTop: "15px",
  width: "120vh",
};

const bannerMainContainer = {
  marginTop: "30px",
  display: "flex",
  border: "1px red solid",
};

export default function Banners() {
  const [loader, setLoader] = useState(false);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    setLoader(true);
    axios
      .get(Endpoint.getAllBanners())
      .then((res) => {
        if (
          res.data?.responseWrapper != null &&
          res.data?.responseWrapper.length > 0
        ) {
          console.log(res.data?.responseWrapper[0]);
          const result = res.data?.responseWrapper[0];
          let temp = [];
          temp.push({
            id: 1,
            url: result.bannerimg1,
            disbale: true,
          });
          temp.push({
            id: 2,
            url: result.bannerimg2,
            disbale: true,
          });
          temp.push({
            id: 3,
            url: result.bannerimg3,
            disbale: true,
          });
          temp.push({
            id: 4,
            url: result.bannerimg4,
            disbale: true,
          });
          temp.push({
            id: 5,
            url: result.bannerimg5,
            disbale: true,
          });
          temp.push({
            id: 6,
            url: result.bannerimg6,
            disbale: true,
          });
          temp.push({
            id: 7,
            url: result.bannerimg7,
            disbale: true,
          });

          setBanner(temp);
        }
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  }, []);

  const handleEditClick = (event) => {
    let id = event.target.name;
    let temp = [];
    for (let i = 0; i < banner.length; i++) {
      let t = banner[i];
      if (t.id == id) {
        t.disbale = false;
        temp.push(t);
      } else {
        t.disbale = true;
        temp.push(t);
      }
    }

    setBanner(temp);
  };

  const handleSave = (e) => {
    let id = e.target.name;
    let temp = [];
    for (let i = 0; i < banner.length; i++) {
      let t = banner[i];
      console.log(t);
        t.disbale = true;
        temp.push(t);
    }    
    setBanner(temp);
  }

  const handleUrlCHange = (e) => {
    let id = e.target.name;
    console.log(id);
  }

  return (
    <>
      <AlifCircularLoader open={loader} />
      <Table>
        <TableBody>
          {banner.map((ban) => {
            return (
              <TableRow key={ban.id}>
                <TableCell>
                  <Box style={{ border: "1px gray solid", height: "50px" }}>
                    <img alt="Img" src={ban.url} />
                  </Box>
                </TableCell>
                <TableCell label="Banner 1" component="th" scope="row">
                  <TextField
                    onChange={(e) => handleUrlCHange(e)}
                    // value={ban.url}
                    placeholder={ban.url}
                    name={ban.id}
                    disabled={ban.disbale}
                    fullWidth
                  ></TextField>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ backgroundColor: "#673ab7", marginRight: 2 }}
                    name={ban.id}
                    onClick={(e) => handleEditClick(e)}
                    variant="contained"
                  >
                    Edit
                  </Button>
                  { !ban.disbale && 
                    <Button
                      sx={{ backgroundColor: "#673ab7" }}
                      name={ban.id}
                      onClick={(e) => handleSave(e)}
                      variant="contained"
                    >
                      Save
                    </Button>
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
