import { formatDate } from "@/lib/utils/date";

/**
 * Formats OSS contributions with display data
 */
function formatContributions(contributions: OssContribution[]): FormattedContribution[] {
	return contributions.map((contrib) => {
		const closedAt = new Date(contrib.closedAt);
		const closedAtFmt = formatDate(closedAt);

		return {
			...contrib,
			closedAtFmt,
		};
	});
}

/**
 * Sorts contributions by closed date in descending order (newest first)
 */
function sortByClosedDate(contributions: OssContribution[]): OssContribution[] {
	return [...contributions].sort((a, b) => {
		return new Date(b.closedAt).getTime() - new Date(a.closedAt).getTime();
	});
}

/**
 * Processes raw contribution data: sorts, formats, and returns top 10
 */
export function processContributions(contributions: OssContribution[]): FormattedContribution[] {
	const sorted = sortByClosedDate(contributions);
	const formatted = formatContributions(sorted);
	return formatted.slice(0, 10);
}

/**
 * Static OSS contribution data structure
 */
export interface OssContribution {
	closedAt: string;
	id: string;
	number: number;
	repository: {
		name: string;
		nameWithOwner: string;
	};
	title: string;
	url: string;
}

/**
 * Formatted contribution with additional display data
 */
export interface FormattedContribution {
	closedAt: string;
	id: string;
	number: number;
	repository: {
		name: string;
		nameWithOwner: string;
	};
	title: string;
	url: string;
	closedAtFmt: string;
}
