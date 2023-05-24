
import { User } from "../../../models/User.model"
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from "./UsersActions";



interface UsersState {
    users: User[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: "",
    count: 0
}

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
            state.isLoading = false,
                state.error = "",
                state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true

        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false,
                state.error = action.payload
        }
    }
})

export default usersSlice.reducer