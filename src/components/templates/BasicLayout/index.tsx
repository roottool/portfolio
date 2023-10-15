import type { ReactElement } from 'react'

import Navbar from '@/components/layouts/Navbar'

const BasicLayout = (page: ReactElement) => (
	<div className="grid">
		<Navbar />
		{page}
	</div>
)

export default BasicLayout
