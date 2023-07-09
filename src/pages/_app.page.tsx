import { globalCss } from '@stitches/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'
import type { ReactElement, ReactNode } from 'react'

import initMocks from '@/mocks'

import '@/styles/globals.css'

if (process.env.NODE_ENV === 'development') {
	initMocks()
}

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const globalStyles = globalCss({
	html: {
		height: '100%',
	},
	body: {
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

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page)

	return getLayout(
		<StrictMode>
			<Component {...pageProps} />
		</StrictMode>,
	)
}

export default App
