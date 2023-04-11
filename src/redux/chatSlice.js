// Redux imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatId: '',
}

export const chatController = createSlice({
  name: 'chatController',
  initialState,
  reducers: {
    updateChatState: (state, action) => {
      state.chatId = action.payload
    },
  }
})

export const { updateChatState } = chatController.actions

export default chatController.reducer