import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { USER } from '@models/User.model';

export const fetchUsers = createAsyncThunk('user/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<USER[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
  }
});
