import { createSlice } from "@reduxjs/toolkit";
import { fetchCustomerList } from "./thunk";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerData: [],
  },
  reducers: {
    setCustomerData: (state, action) => {
      state.customerData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomerList.fulfilled, (state, action) => {
      state.customerData = action.payload;
    });
    builder.addCase(fetchCustomerList.rejected, (state, action) => {
      state.customerData = action.payload;
    });
  },
});

const { reducer } = customerSlice;
const selectorCustomer = (state) => state.customer;
const { setCustomerData } = customerSlice.actions;
export { setCustomerData, selectorCustomer };

export default reducer;
