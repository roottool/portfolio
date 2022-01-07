import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { MAX_SMARTPHONE_SIZE, MIN_TABLET_SIZE } from '../../Shared/Styles/StyleConstants'

const Home = () => (
  <div>
    <TopPageTitleWrapper>Welcome to roottool&apos;s portfolio site!</TopPageTitleWrapper>
    <p>&quot;Why do it yourself when robots do it better?&quot;</p>
    <p>- echo -</p>
  </div>
)

const TopPageTitleWrapper = styled.h1`
  @media (max-width: ${MAX_SMARTPHONE_SIZE}px) {
    font-size: 2rem;
    margin-top: 20vh;
  }

  @media (min-width: ${MIN_TABLET_SIZE}px) {
    font-size: 3.5rem;
    margin-top: 40vh;
  }
`

const Container = () => (
  <>
    <Helmet>
      <title>roottool&apos;s Portfolio Site</title>
    </Helmet>
    <Home />
  </>
)

export default Container
