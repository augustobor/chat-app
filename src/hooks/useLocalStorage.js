import React from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [items, setItems] = React.useState(initialValue)

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setItems(parsedItem)
  }, [])

  return items
}

export { useLocalStorage }
