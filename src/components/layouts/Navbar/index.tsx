import Link from 'next/link'

import { Root as ToolbarRoot } from '@radix-ui/react-toolbar'

import StyledToolbarLink from './ToolbarLink'

const Navbar = () => (
	<ToolbarRoot className="items-center justify-between bg-bland text-base font-bold no-underline px-2 py-0 md:flex">
		<Link
			className="hidden text-xl text-white no-underline px-2 py-4 md:block"
			href="/"
		>
			roottool&apos;s portfolio
		</Link>
		<div className="flex items-center justify-between">
			<StyledToolbarLink href="/works">Works</StyledToolbarLink>
			<Link className="block md:hidden text-white" href="/">
				Home
			</Link>
			<StyledToolbarLink href="/hobbies">Hobbies</StyledToolbarLink>
		</div>
	</ToolbarRoot>
)

export default Navbar
