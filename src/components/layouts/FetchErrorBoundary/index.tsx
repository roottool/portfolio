import type { PropsWithChildren } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const FetchErrorBoundaryPresenter = () => (
	<p role="alert">読み込みに失敗しました</p>
)

const FetchErrorBoundary = ({ children }: PropsWithChildren) => (
	<ErrorBoundary FallbackComponent={FetchErrorBoundaryPresenter}>
		{children}
	</ErrorBoundary>
)

export default FetchErrorBoundary
