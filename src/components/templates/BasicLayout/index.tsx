import type { ReactElement } from 'react'

import Navbar from '@/components/layouts/Navbar'
import { styled } from '@/styles/StyleConstants'

const BasicLayout = (page: ReactElement) => (
	<GridContainer>
		<Navbar />
		{page}
	</GridContainer>
)

const GridContainer = styled('div', {
	display: 'grid',
})

export default BasicLayout
