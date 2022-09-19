import { styled } from '@/styles/StyleConstants'

const Home = () => (
  <main>
    <TopPageTitleWrapper>Welcome to roottool&apos;s portfolio!</TopPageTitleWrapper>
    <p>&quot;Why do it yourself when robots do it better?&quot;</p>
    <p>- echo -</p>
  </main>
)

const TopPageTitleWrapper = styled('h1', {
  fontSize: '3.5rem',
  marginTop: '40vh',
  '@bp2': {
    fontSize: '2rem',
    marginTop: '20vh',
  },
})

export default Home
