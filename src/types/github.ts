/**
 * GitHub API type definitions (LEGACY - for reference only)
 */

export interface PullRequest {
	merged_at: string
}

export interface IssueItem {
	id: number
	repository_url: string
	html_url: string
	title: string
	number: number
	pull_request: PullRequest
}

export interface IssuesSearchResponse {
	items: IssueItem[]
}

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
