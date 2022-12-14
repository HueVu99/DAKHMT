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

export const createNhanVien = createAsyncThunk(
  "nhanvien/create",
  async (nhanvien, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await nhanvienService.createNhanVien(nhanvien, token);
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

export const editNhanVien = createAsyncThunk(
  "nhanvien/edit",
  async (nhanvien, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await nhanvienService.editNhanVien(nhanvien, token);
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

export const deleteNhanvien = createAsyncThunk(
  "nhanvien/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await nhanvienService.deleteNhanvien(id, token);
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

      .addCase(createNhanVien.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNhanVien.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nhanvien.push(action.payload);
      })
      .addCase(createNhanVien.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(editNhanVien.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editNhanVien.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.nhanvien = state.nhanvien.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      })
      .addCase(editNhanVien.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

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
      })
      .addCase(deleteNhanvien.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteNhanvien.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.nhanvien = state.nhanvien.filter(
          (nhanviens) => nhanviens._id !== action.payload.id
        );
      })
      .addCase(deleteNhanvien.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = nhanvienSlice.actions;
export default nhanvienSlice.reducer;
