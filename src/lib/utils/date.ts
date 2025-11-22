/**
 * Formats a Date object into YYYY/MM/DD format
 * @param date - The date to format
 * @returns Formatted date string in YYYY/MM/DD format
 * @example
 * formatDate(new Date('2024-03-15')) // Returns '2024/03/15'
 */
export function formatDate(date: Date): string {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${year}/${month}/${day}`
}
