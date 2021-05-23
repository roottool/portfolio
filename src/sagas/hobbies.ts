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

// 2019/1/22 time point SteamOwnedGameData

/**
 * プレイ時間降順ソート
 *
 * 参考URL
 *
 * https://medium.com/@pagalvin/sort-arrays-using-typescript-592fa6e77f1
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

/**
 * An error has occured.
 *
 * Error message is "No 'Access-Control-Allow-Origin' header is present on the requested resource.".
 *
 * Therefore I cancel to use this function until this issue is resolved.
 */
const fetchOwnedGamesApi = () => {
  const url = `https://roottool.netlify.com/.netlify/functions/fetchOwnedGamesApi`

  return axios
    .get(url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      throw new Error(error)
    })
}

export async function* fetchUserOwnedGameInfo(): AsyncGenerator<
  TakeEffect | PutEffect<ReceiveFetchedUserOwnedGamesAction>,
  void,
  unknown
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
  void,
  unknown
> {
  yield fork(fetchUserOwnedGameInfo)
}
