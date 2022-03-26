import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  body: {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(/images/EchoCat.webp)',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '38% 38%',
    fontFamily: 'sans-serif',
    margin: 0,
    padding: 0,
  },
  html: {
    height: '100%',
  },
  main: {
    height: '100%',
    textAlign: 'center',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  return <Component {...pageProps} />
}

export default App
