import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../components/UserList';

interface IUserState {
  users: IUser[]
} 

const initialState:IUserState = {
  users: []
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
    }
  }
});

export const { addUsers } = usersSlice.actions
export default usersSlice.reducer