import { useLocalStorage } from './useLocalStorage'

function useChats (chatSearch) {
  const chats = useLocalStorage('CHATS', [{
    id: '1',
    name: 'Carlos',
    lastMessage: 'Mi último mensaje'
  },
  {
    id: '2',
    name: 'Martin',
    lastMessage: 'Mi último mensaje'
  }])

  let searchedChats = []

  if (chatSearch === '') {
    searchedChats = chats
  } else {
    searchedChats = chats.filter(chat => {
      const chatName = chat.name.toLowerCase()
      const searchText = chatSearch.toLowerCase()
      return chatName.includes(searchText)
    })
  }
  return searchedChats
}

export default useChats
