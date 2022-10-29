import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import thueService from "./thueService";

const initialState = {
  thue: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get user goals
export const getThues = createAsyncThunk(
  "thue/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await thueService.getThue(token);
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
export const createThue = createAsyncThunk(
  "thue/create",
  async (thue, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await thueService.createThue(thue, token);
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
export const deleteThue = createAsyncThunk(
  'thue/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await thueService.deleteThue(id, token)
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
export const editThue = createAsyncThunk(
  "bhxh/edit",
  async (thue, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await thueService.editThue(thue, token);
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
export const thueSlice = createSlice({
  name: "thue",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createThue.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(createThue.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.thue.push(action.payload);
    })
    .addCase(createThue.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    })
    .addCase(editThue.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editThue.fulfilled, (state, action) => {
        state.isLoading = false;
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.thue = state.thue.map((item) =>
            item._id === id ? action.payload : item
          );
        }
      })
      .addCase(editThue.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getThues.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getThues.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.thue = action.payload;
      })
      .addCase(getThues.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteThue.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteThue.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.thue = state.thue.filter(
          (thues) => thues._id !== action.payload.id
        )
      })
      .addCase(deleteThue.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
});

export const { reset } = thueSlice.actions;
export default thueSlice.reducer;
