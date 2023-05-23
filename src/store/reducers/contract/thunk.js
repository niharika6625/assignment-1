import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchContractList = createAsyncThunk("contract/list", async () => {
  try {
    let response = await fetch("./contracts.json")
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

export { fetchContractList };
