import { Loader2 } from 'lucide-react'

const LoadingSpinner = () => (
	<div className="flex justify-center items-center text-sm text-muted-foreground h-full">
		<Loader2 className="mr-2 h-4 w-4 animate-spin" />
		Loading...
	</div>
)

export { LoadingSpinner }
