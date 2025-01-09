import { getContext, setContext } from 'svelte'

const testContextKey = Symbol('test')

export function getTestContext() {
    return getContext(testContextKey)
}

export function setTestContext(testValue: string) {
    setContext(testContextKey, testValue)
}
