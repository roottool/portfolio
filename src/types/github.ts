/**
 * GitHub API type definitions
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
