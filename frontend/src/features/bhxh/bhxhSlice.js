import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bhxhService from "./bhxhService";

const initialState = {
  bhxh: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getBHXHs = createAsyncThunk("bhxh/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await bhxhService.getBHXH(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const createBHXH = createAsyncThunk(
  "bhxh/create",
  async (bhxh, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bhxhService.createBHXH(bhxh, token);
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
export const deleteBHXH = createAsyncThunk(
  "bhxh/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bhxhService.deleteBHXH(id, token);
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
export const editBHXH = createAsyncThunk(
  "bhxh/edit",
  async (bhxh, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await bhxhService.editBHXH(bhxh, token);
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
export const bhxhSlice = createSlice({
  name: "bhxh",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBHXH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBHXH.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bhxh.push(action.payload);
      })
      .addCase(createBHXH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editBHXH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editBHXH.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.bhxh = state.bhxh.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      })
      .addCase(editBHXH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBHXHs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBHXHs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bhxh = action.payload;
      })
      .addCase(getBHXHs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBHXH.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBHXH.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bhxh = state.bhxh.filter(
          (bhxhs) => bhxhs._id !== action.payload.id
        );
      })
      .addCase(deleteBHXH.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bhxhSlice.actions;
export default bhxhSlice.reducer;
