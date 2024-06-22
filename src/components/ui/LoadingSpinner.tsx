import { AiOutlineLoading } from 'react-icons/ai'

const LoadingSpinner = () => (
	<div className="flex justify-center items-center text-sm text-muted-foreground h-full">
		<AiOutlineLoading className="mr-2 h-4 w-4 animate-spin" />
		<p>Loading...</p>
	</div>
)

export { LoadingSpinner }
