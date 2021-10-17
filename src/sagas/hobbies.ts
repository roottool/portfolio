import axios from 'axios'
import { take, put, fork } from 'redux-saga/effects'
import type { ForkEffect, PutEffect, TakeEffect } from 'redux-saga/effects'

import {
  ActionNames,
  receiveFetchedUserOwnedGameInfo,
} from '../Pages/Hobbies/module'
import type {
  IUserOwnedGames,
  IGamesInfo,
  ReceiveFetchedUserOwnedGamesAction,
} from '../Pages/Hobbies/module'

/**
 * プレイ時間降順ソート
 * @link https://medium.com/@pagalvin/sort-arrays-using-typescript-592fa6e77f1
 */
const sortOwnedGames = (ownedGames: IUserOwnedGames) => {
  return ownedGames.response.games.sort(
    (leftSide: IGamesInfo, rightSide: IGamesInfo): number => {
      if (leftSide.playtime_forever > rightSide.playtime_forever) {
        return -1
      } else if (leftSide.playtime_forever < rightSide.playtime_forever) {
        return 1
      }
      return 0
    }
  )
}

const fetchOwnedGamesApi = async () => {
  const url = `https://roottool.netlify.com/.netlify/functions/fetchOwnedGamesApi`
  const response = await axios
  .get<IUserOwnedGames>(url).then(response => response.data).catch(error => {
    // FIXME: An error has occurred.
    // ! Error message is "No 'Access-Control-Allow-Origin' header is present on the requested resource.".
    // ! Therefore I cancel to use this function until this issue is resolved.
    throw new Error(error)
  })
  return response
}

export async function* fetchUserOwnedGameInfo(): AsyncGenerator<
  TakeEffect | PutEffect<ReceiveFetchedUserOwnedGamesAction>,
  void
> {
  while (true) {
    yield take(ActionNames.REQUEST_FETCH)
    const ownedGames = await fetchOwnedGamesApi()
    const sortedOwendGames = await sortOwnedGames(ownedGames)
    yield put(receiveFetchedUserOwnedGameInfo(sortedOwendGames))
  }
}

export default function* root(): Generator<
  ForkEffect<
    AsyncGenerator<
      TakeEffect | PutEffect<ReceiveFetchedUserOwnedGamesAction>,
      void,
      unknown
    >
  >,
  void
> {
  yield fork(fetchUserOwnedGameInfo)
}
