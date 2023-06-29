import Head from 'next/head'

import BasicLayout from '@/components/templates/BasicLayout'
import Home from '@/components/templates/Home'

import type { NextPageWithLayout } from './_app.page'

const Container: NextPageWithLayout = () => (
  <>
    <Head>
      <title>roottool&apos;s Portfolio Site</title>
    </Head>
    <Home />
  </>
)
Container.getLayout = BasicLayout

export default Container
