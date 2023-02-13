/* eslint-disable react/jsx-filename-extension */
import { useState } from "react";
import { useLocalStorage } from './useLocalStorage';

function useChats() {

    const {
        item: chats,
    } = useLocalStorage('CHATS', []);

    const [chatSearch, setChatSearch] = useState('')

    const totalChats = chats.length
    let searchedChats = [];

    if (chatSearch !== '') {
        searchedChats = chats;
    } else {
        searchedChats = chats.filter(chat => {
        const chatName = chat.name.toLowerCase();
        const searchText = chatSearch.toLowerCase();
        return chatName.includes(searchText);
        });
    }

    return {
        totalChats,
        chatSearch,
        setChatSearch,
        searchedChats,
    };
}

export default useChats()