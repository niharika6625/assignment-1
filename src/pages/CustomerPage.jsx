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
import DeleteModal from "../components/DeleteModal";
import { fetchContractList } from "../store/reducers/contract/thunk";
import { fetchCustomerList } from "../store/reducers/customer/thunk";

const CustomerPage = () => {
  const dispatch = useDispatch();
  const customer = useSelector(selectorCustomer);
  const contract = useSelector(selectorContract);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [contractList, setContractList] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteCustomerId, setDeleteCustomerId] = useState(null);
  const [deleteContractId, setDeleteContractId] = useState(null);
  const [modalType, setModalType] = useState("");

  // useEffect(() => {
  //   fetch("./customer.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((response) => {
  //       dispatch(setCustomerData(response));
  //     });
  // }, []);

  useEffect(() => {
    dispatch(fetchContractList());
    dispatch(fetchCustomerList());
    // fetch("./contracts.json")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((response) => {
    //     dispatch(setContractData(response));
    //   });
  }, []);

  useEffect(() => {
    if (customer.customerData && customer.customerData.length) {
      setSelectedCustomer(customer.customerData[0].id);
    } else {
      setContractList([]);
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

  const handleSelectedCustomer = (id) => {
    setSelectedCustomer(id);
  };

  const handleDelete = (id, type = "") => {
    switch (type) {
      case "customer":
        setModalType(type);
        setDeleteCustomerId(id);
        setOpen(true);
        break;
      case "contract":
        setModalType(type);
        setDeleteContractId(id);
        setOpen(true);
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setOpen(false);
  };

  const confirmDelete = () => {
    switch (modalType) {
      case "customer":
        let tempCustomerData = customer.customerData.filter(
          (item) => item.id !== deleteCustomerId
        );
        dispatch(setCustomerData(tempCustomerData));
        closeModal();
        break;
      case "contract":
        let tempContractData = contract.contractData.filter(
          (item) => item.id !== deleteContractId
        );
        dispatch(setContractData(tempContractData));
        closeModal();
        break;
      default:
        break;
    }
  };

  return (
    <div className="cust-wrap">
      <DeleteModal
        open={open}
        setOpen={closeModal}
        confirmDelete={confirmDelete}
        title={`${
          modalType === "customer"
            ? "The selected customer and all it's contracts will be deleted. Do you confirm?"
            : "The selected contract will be deleted. Do you confirm?"
        }`}
      />

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
          <Paper sx={{ maxWidth: 320 }}>
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
                      <DeleteIcon
                        onClick={() => handleDelete(row.id, "customer")}
                      />
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
                <TableRow sx={{ fontSize: "2rem" }}>
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
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="left">{row.customerId}</TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.type}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Delete Contract" placement="right-start">
                        <DeleteOutlineIcon
                          color="action"
                          onClick={() => handleDelete(row.id, "contract")}
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
