import Head from 'next/head'

import type { NextPageWithLayout } from './_app.page'
import BasicLayout from '@/components/templates/BasicLayout'
import Home from '@/components/templates/Home'

const Container: NextPageWithLayout = () => (
	<>
		<Head>
			<title>roottool&apos;s Portfolio Site</title>
		</Head>
		<Home />
	</>
)
Container.getLayout = BasicLayout

export default Container
