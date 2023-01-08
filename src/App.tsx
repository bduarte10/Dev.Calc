import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Calculator } from './components/Calculator'
import Header from './components/Header'
import { Introduction } from './components/Introduction'

import { GlobalStyle } from './styles/global'
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header toggleDarkMode={toggleDarkMode} />
      <Introduction />
      <Calculator isDarkMode={isDarkMode} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
