import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {

    const storageItem = window.localStorage.getItem(key)
    return storageItem ? JSON.parse(storageItem) : initialValue

  })

  const setStored = value => {
    setValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  return [value, setStored]
}

export default useLocalStorage