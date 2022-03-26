import type { ReactNode } from 'react'

import Navbar from '@/components/organisms/Navbar'

interface Props {
  children: ReactNode
}

const BasePageTemplate = ({ children }: Props) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
)

export default BasePageTemplate
