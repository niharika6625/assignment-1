import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCustomerData, selectorCustomer } from "../store/reducers/customer";
import { setContractData, selectorContract } from "../store/reducers/contract";
import "./customer.css";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const CustomerPage = () => {
  const dispatch = useDispatch();
  const customer = useSelector(selectorCustomer);
  const contract = useSelector(selectorContract);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [contractList, setContractList] = useState([]);

  useEffect(() => {
    fetch("./customer.json")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dispatch(setCustomerData(response));
      });
  }, []);

  useEffect(() => {
    if (customer.customerData && customer.customerData.length) {
      setSelectedCustomer(customer.customerData[0].id);
    }
  }, [customer.customerData]);

  useEffect(() => {
    if (selectedCustomer || selectedCustomer === 0) {
      let tempContract = contract.contractData.filter(
        (item) => item.customerId === selectedCustomer
      );
      setContractList(tempContract);
    } else {
      setContractList(contract.contractData);
    }
  }, [selectedCustomer, contract.contractData]);

  useEffect(() => {
    fetch("./contracts.json")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        dispatch(setContractData(response));
      });
  }, []);

  const handleSelectedCustomer = (id) => {
    console.log("id", id);
    setSelectedCustomer(id);
  };

  const handleDeleteContract = (id) => {
    let tempContractData = contract.contractData.filter(
      (item) => item.id !== id
    );
    dispatch(setContractData(tempContractData));
  };
  return (
    <div className="cust-wrap">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Customers</Typography>
      </Breadcrumbs>
      <div className="cust-header">
        <h1>&#91; Customer's Contracts &#93;</h1>
      </div>
      <div className="cust-content">
        <div className="cust-list">
          <Paper sx={{ width: 320 }}>
            <Typography
              variant="h6"
              padding={"12px"}
              sx={{ backgroundColor: "#d4d7d9" }}
            >
              Select Customer
            </Typography>
            <Divider variant="middle" />
            <MenuList>
              {customer.customerData.map((row, index) => (
                <MenuItem
                  key={index + "-id"}
                  onClick={() => handleSelectedCustomer(row.id)}
                  style={{
                    backgroundColor:
                      row.id === selectedCustomer ? "#a6dff5" : "unset",
                    borderBottomRightRadius: "40px",
                    borderTopRightRadius: "40px",
                  }}
                >
                  <ListItemText
                    align="left"
                    primary={row.name}
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ display: "inline" }} variant="body2">
                          Customer Id :
                        </Typography>
                        {row.id}
                      </React.Fragment>
                    }
                  />
                  <Divider orientation="vertical" flexItem />
                  <Tooltip title="Delete Customer" placement="right">
                    <IconButton aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </div>
        <div className="cust-contracts">
          <TableContainer component={Paper} sx={{ height: 600, width: "100%" }}>
            <Table
              stickyHeader
              sx={{ minWidth: 1000 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <b>Customer Id</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Contract Name</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Status</b>
                  </TableCell>
                  <TableCell align="left">
                    <b>Type</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Action</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contractList.map((row, index) => (
                  <TableRow
                    key={index + "_id"}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.customerId}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Delete Contract" placement="right-start">
                        <DeleteOutlineIcon
                          color="action"
                          onClick={() => handleDeleteContract(row.id)}
                        />
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div className="cust-new"></div>
    </div>
  );
};

export default CustomerPage;
