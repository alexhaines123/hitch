import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  email: string
}

const initialState: UserState = {
  email: '',
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail } = userSlice.actions

export default userSlice.reducer