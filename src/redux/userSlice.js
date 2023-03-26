// Redux imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: 'aaa',
}

export const userController = createSlice({
  name: 'userController',
  initialState,
  reducers: {
    updateUserState: (state, action) => {
      state.userId = action.payload
    },
  }
})

export const { updateUserState } = userController.actions

export default userController.reducer