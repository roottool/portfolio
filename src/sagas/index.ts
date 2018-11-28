import { fork } from "redux-saga/effects";
import hobbies from "./hobbies";

export default function* root() {
    yield fork(hobbies);
}
