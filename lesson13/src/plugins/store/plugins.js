import {STORAGE_KEY} from './mutations'
//import createLogger from 'logger'

const localStoragePlugin = store => {
    store.subscribe((mutation, {basket}) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(basket))
    })
}

//export default process.env.NODE_ENV !== 'production' ? [createLogger(), localStoragePlugin] : [localStoragePlugin]

export default [localStoragePlugin]