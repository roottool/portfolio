import { fork } from 'redux-saga/effects'
import type { ForkEffect } from 'redux-saga/effects'

import hobbies from './hobbies'

export default function* root(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(hobbies)
}
