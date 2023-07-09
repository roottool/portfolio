import Head from 'next/head'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { RxGithubLogo } from 'react-icons/rx'

import PageTitleWrapper from '@/components/atoms/PageTitleWrapper'
import BasicLayout from '@/components/templates/BasicLayout'
import {
	Card,
	CardHeader,
	CardContent,
	CardDescription,
} from '@/components/ui/card'
import type { NextPageWithLayout } from '@/pages/_app.page'

import contents from './WorksContents.json'

const Works = () => (
	<main className="container mx-auto">
		<PageTitleWrapper>Works</PageTitleWrapper>
		<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{contents.map((item, key) => (
				<section key={key}>
					<Card>
						<CardHeader>
							<div className="grid grid-flow-col auto-cols-max justify-around gap-2">
								<h4>{item.title}</h4>
								<Link href={item.href}>
									<IconContext.Provider value={{ size: '2em' }}>
										<RxGithubLogo />
									</IconContext.Provider>
								</Link>
							</div>
							<CardDescription>{item.tools}</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{item.text}</p>
						</CardContent>
					</Card>
				</section>
			))}
		</div>
	</main>
)

const Container: NextPageWithLayout = () => (
	<>
		<Head>
			<title>Works - roottool&apos;s Portfolio Site</title>
		</Head>
		<Works />
	</>
)
Container.getLayout = BasicLayout

export default Container
