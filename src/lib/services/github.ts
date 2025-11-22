import { formatDate } from '@/lib/utils/date'
import type { IssueItem } from '@/types/github'

/**
 * Extended issue item with formatted merge date
 */
export interface FormattedIssueItem extends IssueItem {
	mergedAtFmt: string
}

/**
 * Filters out pull requests to repositories owned by the given username
 * @param prs - Array of pull request items
 * @param username - GitHub username to filter against
 * @returns Filtered array of pull requests
 */
export function filterOwnRepositories(
	prs: IssueItem[],
	username: string,
): IssueItem[] {
	return prs.filter((pr) => {
		const repoPath = pr.repository_url.split('/').slice(-2).join('/')
		const [owner = ''] = repoPath.split('/')
		return owner.toLowerCase() !== username.toLowerCase()
	})
}

/**
 * Sorts pull requests by merge date in descending order (newest first)
 * @param prs - Array of pull request items
 * @returns Sorted array of pull requests
 */
export function sortByMergedDate(prs: IssueItem[]): IssueItem[] {
	return [...prs].sort((a, b) => {
		const aTime = new Date(a.pull_request.merged_at).getTime()
		const bTime = new Date(b.pull_request.merged_at).getTime()
		return bTime - aTime
	})
}

/**
 * Formats pull requests with a human-readable merge date
 * @param prs - Array of pull request items
 * @returns Array of pull requests with formatted merge date
 */
export function formatPullRequests(prs: IssueItem[]): FormattedIssueItem[] {
	return prs.map((pr) => {
		const mergedAt = new Date(pr.pull_request.merged_at)
		const mergedAtFmt = formatDate(mergedAt)
		return { ...pr, mergedAtFmt }
	})
}

/**
 * Processes raw pull request data: filters, sorts, and formats
 * @param prs - Array of pull request items
 * @param username - GitHub username to filter against
 * @returns Processed and formatted pull requests
 */
export function processPullRequests(
	prs: IssueItem[],
	username: string,
): FormattedIssueItem[] {
	const filtered = filterOwnRepositories(prs, username)
	const sorted = sortByMergedDate(filtered)
	return formatPullRequests(sorted)
}
