import type { IssuesSearchResponse } from '@/types/github'

/**
 * Fetches merged pull requests for a given GitHub username
 * @param username - GitHub username to fetch contributions for
 * @returns Promise resolving to the GitHub Issues Search API response
 */
export async function fetchGitHubContributions(
	username: string,
): Promise<IssuesSearchResponse> {
	const url = `https://api.github.com/search/issues?q=author:${username}+is:pr+is:merged&sort=updated&order=desc`
	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(
			`GitHub API error: ${response.status} ${response.statusText}`,
		)
	}

	return (await response.json()) as IssuesSearchResponse
}
