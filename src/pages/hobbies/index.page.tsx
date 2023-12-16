import Head from 'next/head'

import type { NextPageWithLayout } from '../_app.page'
import BasicLayout from '@/components/templates/BasicLayout'
import Hobbies from '@/components/templates/Hobbies'

const Container: NextPageWithLayout = () => (
	<>
		<Head>
			<title>Hobbies - roottool&apos;s Portfolio Site</title>
		</Head>
		<Hobbies />
	</>
)
Container.getLayout = BasicLayout

export default Container
