import { makeAutoObservable } from "mobx"
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

export default class LoadingStore {
    loading = true;

    constructor() {
        makeAutoObservable(this)
    }
}