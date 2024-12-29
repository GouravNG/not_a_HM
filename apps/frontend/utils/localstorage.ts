'use client'
export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorage = <T>(key: string) => {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : new Error('Key not found!!')
}
