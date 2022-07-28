import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'

import BasePageTemplate from '@/components/templates/BasePageTemplate'
import initMocks from '@/mocks'

if (process.env.NODE_ENV === 'development') {
  initMocks()
}

const globalStyles = globalCss({
  html: {
    height: '100%',
  },
  body: {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(/images/EchoCat.webp)',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '38% 38%',
    fontFamily:
      '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    textAlign: 'center',
  },
})

globalStyles()
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BasePageTemplate>
      <Component {...pageProps} />
    </BasePageTemplate>
  )
}

export default App
