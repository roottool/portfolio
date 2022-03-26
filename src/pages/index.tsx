import Head from 'next/head'

import BasePageTemplate from '@/components/templates/BasePageTemplate'
import { styled } from '@/styles/StyleConstants'

const Home = () => (
  <div>
    <TopPageTitleWrapper>Welcome to roottool&apos;s portfolio site!</TopPageTitleWrapper>
    <p>&quot;Why do it yourself when robots do it better?&quot;</p>
    <p>- echo -</p>
  </div>
)

const TopPageTitleWrapper = styled('h1', {
  fontSize: '2rem',
  marginTop: '20vh',
  '@bp2': {
    fontSize: '3.5rem',
    marginTop: '40vh',
  },
})

const Container = () => (
  <>
    <Head>
      <title>roottool&apos;s Portfolio Site</title>
    </Head>
    <BasePageTemplate>
      <Home />
    </BasePageTemplate>
  </>
)

export default Container
