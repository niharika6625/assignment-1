import { createSlice } from "@reduxjs/toolkit";
import { fetchContractList } from "./thunk";
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
  extraReducers: (builder) => {
    builder.addCase(fetchContractList.fulfilled, (state, action) => {
      state.contractData = action.payload;
    });
    builder.addCase(fetchContractList.rejected, (state, action) => {
      state.contractData = action.payload;
    });
  },
});

const { reducer } = contractSlice;
const selectorContract = (state) => state.contract;
const { setContractData } = contractSlice.actions;
export { setContractData, selectorContract };

export default reducer;
