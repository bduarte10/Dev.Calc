import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Introduction } from './components/Introduction'

import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Introduction />
      {/* <Calculadora/> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
