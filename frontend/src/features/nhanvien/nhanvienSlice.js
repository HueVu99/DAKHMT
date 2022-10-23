import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import nhanvienService from "./nhanvienService";

const initialState = {
  nhanvien: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getNhanViens = createAsyncThunk(
  "nhanvien/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await nhanvienService.getNhanViens(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const nhanvienSlice = createSlice({
  name: "nhanvien",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNhanViens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNhanViens.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nhanvien = action.payload;
      })
      .addCase(getNhanViens.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = nhanvienSlice.actions;
export default nhanvienSlice.reducer;
