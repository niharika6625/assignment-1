import { createSlice } from "@reduxjs/toolkit";

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
});

const { reducer } = customerSlice;
const selectorCustomer = (state) => state.customer;
const { setCustomerData } = customerSlice.actions;
export { setCustomerData, selectorCustomer };

export default reducer;
