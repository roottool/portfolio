import type { ReactNode } from 'react'

import Navbar from '@/components/organisms/Navbar'

interface Props {
  children: ReactNode
}

const BasePageTemplate = ({ children }: Props) => (
  <div className="App">
    <Navbar />
    <main>{children}</main>
  </div>
)

export default BasePageTemplate
