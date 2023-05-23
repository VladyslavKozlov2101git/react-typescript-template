
import { User } from "../../../models/User.model"
import { PayloadAction, createSlice } from '@reduxjs/toolkit'



interface UsersState {
    user: User[];
    isLoading: boolean;
    error: string;
    count: number;
}

const initialState: UsersState = {
    user: [],
    isLoading: false,
    error: "",
    count: 0
}

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) { state.count += action.payload },
    }
})

export default usersSlice.reducer