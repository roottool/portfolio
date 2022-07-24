import type { NextPage } from 'next'
import Head from 'next/head'

import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { styled } from '@/styles/StyleConstants'

const Home = () => (
  <BasePageTemplate>
    <TopPageTitleWrapper>Welcome to roottool&apos;s portfolio!</TopPageTitleWrapper>
    <p>&quot;Why do it yourself when robots do it better?&quot;</p>
    <p>- echo -</p>
  </BasePageTemplate>
)

const TopPageTitleWrapper = styled('h1', {
  fontSize: '3.5rem',
  marginTop: '40vh',
  '@bp2': {
    fontSize: '2rem',
    marginTop: '20vh',
  },
})

const Container: NextPage = () => (
  <>
    <Head>
      <title>roottool&apos;s Portfolio Site</title>
    </Head>
    <Home />
  </>
)

export default Container
