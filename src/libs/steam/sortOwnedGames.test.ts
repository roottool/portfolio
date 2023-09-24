import { describe, expect, test } from 'vitest'

import sortOwnedGames from './sortOwnedGames'

describe('sortOwnedGames', () => {
	test('This function must run sorting in descending order for `playtime_forever`.', () => {
		const reversePattern = [
			{
				appid: 2945,
				has_community_visible_stats: false,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'George',
				playtime_forever: 60,
			},
			{
				appid: 10,
				has_community_visible_stats: true,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'Pierre',
				playtime_forever: 180,
			},
		]
		expect(sortOwnedGames(reversePattern)).toEqual(reversePattern.reverse())
	})

	test('Patterns that do not require sorting.', () => {
		const unnecessaryPattern = [
			{
				appid: 10,
				has_community_visible_stats: true,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'Pierre',
				playtime_forever: 180,
			},
			{
				appid: 2945,
				has_community_visible_stats: false,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'George',
				playtime_forever: 60,
			},
		]
		expect(sortOwnedGames(unnecessaryPattern)).toEqual(unnecessaryPattern)
	})

	test('Patterns with the same value also do not require sorting.', () => {
		const samePlaytimeForeverPattern = [
			{
				appid: 10,
				has_community_visible_stats: true,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'Pierre',
				playtime_forever: 180,
			},
			{
				appid: 2935,
				has_community_visible_stats: false,
				img_icon_url: 'https://www.example.com/img/banner.jpg',
				name: 'George',
				playtime_forever: 180,
			},
		]
		expect(sortOwnedGames(samePlaytimeForeverPattern)).toEqual(
			samePlaytimeForeverPattern,
		)
	})
})
