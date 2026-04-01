import { createAsyncThunk } from "@reduxjs/toolkit";

import { USER } from "@models/User.model";

import { jsonPlaceholderApi } from "@services/api";

export const fetchUsers = createAsyncThunk("user/fetchAll", async (_, thunkAPI) => {
  try {
    const data = await jsonPlaceholderApi.get("users").json<USER[]>();
    return data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e);
  }
});
