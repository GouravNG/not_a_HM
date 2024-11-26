import type { CartType } from '@repo/types/types'

let cartDB: CartType[] = []

export const addItemToDB = (item: CartType) => {
    cartDB.push(item)
}

export const removeItemFromDB = (id: number) => {
    cartDB.splice(id, 1)
    return cartDB
}

export const updateItemFromDB = (id: number, updates: Partial<CartType>) => {
    cartDB[id] = { ...cartDB[id], ...updates }
    return cartDB
}

export const getCart = () => {
    return cartDB
}
