import Image from 'next/image'

import { MdOpenInNew } from 'react-icons/md'

import {
	STEAM_APP_BANNER_HEIGHT,
	STEAM_APP_BANNER_WIDTH,
} from '@/libs/steam/construct'
import type { OwnedGameInfo } from '@/pages/api/fetchOwnedGames/type'

type GameInfoGridProps = Omit<OwnedGameInfo, 'appId'>

const GameInfoListItem = ({
	appName,
	appUrl,
	bannerUrl,
	playTimeInHours,
}: GameInfoGridProps) => (
	<li className="flex items-center gap-8 list-none">
		<a href={appUrl} rel="noopener noreferrer" target="_blank">
			<Image
				alt={appName}
				height={STEAM_APP_BANNER_HEIGHT}
				src={bannerUrl}
				width={STEAM_APP_BANNER_WIDTH}
			/>
		</a>
		<div>
			<a
				className="flex items-center gap-1 w-max"
				href={appUrl}
				rel="noopener noreferrer"
				target="_blank"
			>
				<p className="font-bold">{appName}</p>
				<MdOpenInNew />
			</a>
			<p className="text-left">プレイ時間: {playTimeInHours}時間</p>
		</div>
	</li>
)

export default GameInfoListItem
