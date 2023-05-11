import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@model/User';

const initialState: { user: User } = {
  user: {} as User,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const UserActions = userSlice.actions;

export default userSlice.reducer;
