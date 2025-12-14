/**
 * Static OSS contribution data structure
 */
export interface OssContribution {
	closedAt: string
	id: string
	number: number
	repository: {
		name: string
		nameWithOwner: string
	}
	title: string
	url: string
}

/**
 * Formatted contribution with additional display data
 */
export interface FormattedContribution {
	closedAt: string
	id: string
	number: number
	repository: {
		name: string
		nameWithOwner: string
	}
	title: string
	url: string
	closedAtFmt: string
}
