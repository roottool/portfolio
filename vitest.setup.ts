import { loadEnvConfig } from '@next/env'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
loadEnvConfig(process.cwd())

afterEach(() => {
	cleanup()
})
