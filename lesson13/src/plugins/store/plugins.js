import {STORAGE_KEY} from './mutations'

const localStoragePlugin = store => {
    store.subscribe((mutation, {basket}) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(basket))
    })
}

export default [localStoragePlugin]
