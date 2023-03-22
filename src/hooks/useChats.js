import { useLocalStorage } from './useLocalStorage'

import axios from 'axios'

const useChats = (chatSearch, chats) => {

  let searchedChats = []

  if (chatSearch === '') {
    searchedChats = chats
  } else {
    searchedChats = chats.filter(chat => {
      const chatName = chat.name?.toLowerCase()
      const searchText = chatSearch?.toLowerCase()
      return chatName.includes(searchText)
    })
  }
  return searchedChats
}

export default useChats
