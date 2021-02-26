import useLocalStorage from './useLocalStorage'

const useDarkMode = () => {
const [darkValue, setDarkValue] = useLocalStorage('dark-mode')
return [darkValue, setDarkValue]
}

export default useDarkMode;