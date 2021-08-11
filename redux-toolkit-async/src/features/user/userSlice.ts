import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import userData from './userData.json';

type UserDataType = typeof userData;

type UserState = { data: UserDataType };

export const getUserData = createAsyncThunk<
  UserState,
  void,
  { state: RootState }
>('user/get', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return { data };
});

const initialState: UserState = {
  data: userData,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
  },
});

export const selectData = (state: RootState): UserDataType => state.user.data;

export default userSlice.reducer;
