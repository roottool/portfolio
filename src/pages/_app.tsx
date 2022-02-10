import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: url(/images/EchoCat.webp);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right bottom;
    background-size: 38% 38%;
  }

  main {
    height: 100%;
    text-align: center;
  }
`

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

export default App
