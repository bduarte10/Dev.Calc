import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  theme: {
    background: string
  }
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    -webkkit-font-smoothing: antialiased;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    height: calc(100vh - 4rem);
  }
`
