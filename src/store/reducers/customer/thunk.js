import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCustomerList = createAsyncThunk("customer/list", async () => {
  try {
    let response = await fetch("./customer.json")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        return response;
      });
    return response;
  } catch (err) {
    return err;
  }
});

export { fetchCustomerList };
