import Link from 'next/link'

import { IconContext } from 'react-icons'
import { FaTwitterSquare } from 'react-icons/fa'
import { RxGithubLogo } from 'react-icons/rx'

import { styled } from '@/styles/StyleConstants'

const GITHUB_URL = 'https://github.com/roottool' as const satisfies string
const TWITTER_URL = 'https://twitter.com/roottool' as const satisfies string

const Home = () => (
	<main>
		<TopPageTitleWrapper>
			Welcome to roottool&apos;s portfolio!
		</TopPageTitleWrapper>
		<p>&quot;Why do it yourself when robots do it better?&quot;</p>
		<p>- echo -</p>
		<div className="mx-auto grid grid-cols-2 justify-around gap-8">
			<a href={GITHUB_URL}>
				<IconContext.Provider value={{ size: '3em' }}>
					<RxGithubLogo />
				</IconContext.Provider>
			</a>
			<Link href={TWITTER_URL}>
				<IconContext.Provider value={{ size: '3em' }}>
					<FaTwitterSquare />
				</IconContext.Provider>
			</Link>
		</div>
	</main>
)

const TopPageTitleWrapper = styled('h1', {
	fontSize: '3.5rem',
	marginTop: '40vh',
	'@bp2': {
		fontSize: '2rem',
		marginTop: '20vh',
	},
})

export default Home
