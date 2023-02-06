import { createContext, useContext } from "react";
import LoadingStore from "./loadingStore.js";

export const store = {
    loadingStore: new LoadingStore ()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}