/**
 * Formats a Date object into YYYY/MM/DD format (fixed to Asia/Tokyo)
 * @param date - The date to format
 * @returns Formatted date string in YYYY/MM/DD format
 * @example
 * formatDate(new Date('2024-03-15T20:00:00Z')) // Returns '2024/03/16' (JST)
 */
export const formatDate = (date: Date): string => {
	return new Intl.DateTimeFormat("ja-JP", {
		timeZone: "Asia/Tokyo",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	}).format(date);
};
