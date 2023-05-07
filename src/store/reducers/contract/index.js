import { createSlice } from "@reduxjs/toolkit";

const contractSlice = createSlice({
  name: "contract",
  initialState: {
    contractData: [],
  },
  reducers: {
    setContractData: (state, action) => {
      state.contractData = action.payload;
    },
  },
});

const { reducer } = contractSlice;
const selectorContract = (state) => state.contract;
const { setContractData } = contractSlice.actions;
export { setContractData, selectorContract };

export default reducer;
