export async function enableMocking() {
	if (process.env.NODE_ENV !== 'development') {
		return
	}

	if (typeof window === 'undefined') {
		const { server } = await import('./server')
		server.listen()
		return
	}

	const { worker } = await import('./browser')
	void worker.start()
}
