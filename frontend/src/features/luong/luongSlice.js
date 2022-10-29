import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import luongService from "./luongService";

const initialState = {
  luong: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getLuongs = createAsyncThunk(
  "luong/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await luongService.getLuong(token);
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

export const createLuong = createAsyncThunk(
  "luong/create",
  async (luong, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await luongService.createLuong(luong,token);
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
export const deleteLuong = createAsyncThunk(
  'luong/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await luongService.deleteLuong(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
export const editLuong = createAsyncThunk(
  "bhxh/edit",
  async (luong, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await luongService.editLuong(luong, token);
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

export const luongSlice = createSlice({
  name: "luong",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createLuong.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLuong.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.luong.push(action.payload);
      })
      .addCase(createLuong.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLuongs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editLuong.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editLuong.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.luong = state.luong.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      })
      .addCase(editLuong.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLuongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.luong = action.payload;
      })
      .addCase(getLuongs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteLuong.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteLuong.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.luong = state.luong.filter(
          (luongs) => luongs._id !== action.payload.id
        )
      })
      .addCase(deleteLuong.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { reset } = luongSlice.actions;
export default luongSlice.reducer;
