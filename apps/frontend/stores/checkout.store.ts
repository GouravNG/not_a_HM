/* eslint-disable no-unused-vars */
import { MyInfoSavedState } from '@repo/types/types'
import { create } from 'zustand'

type CheckoutStoreType = {
    quantity: number
    setQuantity: (quantity: number) => void
    size: string
    setSize: (size: string) => void
    myInfo: MyInfoSavedState
    setMyInfo: (savedInfo: MyInfoSavedState) => void
    isEditing: boolean
    toggleIsEditing: () => void
}

const useCheckoutStore = create<CheckoutStoreType>((set) => ({
    quantity: 0,
    setQuantity: (quantity: number) => set(() => ({ quantity: quantity })),
    size: '',
    setSize: (size: string) => set(() => ({ size: size })),
    myInfo: {},
    setMyInfo: (savedInfo) => set(() => ({ myInfo: savedInfo })),
    isEditing: false,
    toggleIsEditing: () => set((state) => ({ isEditing: !state.isEditing })),
}))

export default useCheckoutStore
