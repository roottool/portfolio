import type { ReactNode } from 'react'

import Navbar from '@/components/layouts/Navbar'
import { styled } from '@/styles/StyleConstants'

interface Props {
  children: ReactNode
}

const GridContainer = styled('div', {
  display: 'grid',
})

const BasePageTemplate = ({ children }: Props) => (
  <GridContainer>
    <Navbar />
    <main>{children}</main>
  </GridContainer>
)

export default BasePageTemplate
