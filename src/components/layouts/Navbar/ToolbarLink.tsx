import type { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'

interface Props {
	href: Url
}

const StyledToolbarLink = ({ children, href }: PropsWithChildren<Props>) => (
	<Link className="text-white no-underline px-4 py-2" href={href}>
		{children}
	</Link>
)

export default StyledToolbarLink
