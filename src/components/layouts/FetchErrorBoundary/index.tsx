import { Typography } from '@material-ui/core'
import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const FetchErrorBoundaryPresenter = () => (
  <div role="alert">
    <Typography variant="subtitle1">読み込みに失敗しました</Typography>
  </div>
)

const FetchErrorBoundary = ({ children }: PropsWithChildren) => (
  <ErrorBoundary FallbackComponent={FetchErrorBoundaryPresenter}>{children}</ErrorBoundary>
)

export default FetchErrorBoundary
