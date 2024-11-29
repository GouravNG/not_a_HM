/* eslint-disable no-unused-vars */
import { create } from 'zustand'

type CheckoutStoreType = {
    quantity: number
    setQuantity: (quantity: number) => void
    size: string
    setSize: (size: string) => void
}

const useCheckoutStore = create<CheckoutStoreType>((set) => ({
    quantity: 0,
    setQuantity: (quantity: number) => set((state) => ({ quantity: quantity })),
    size: '',
    setSize: (size: string) => set(() => ({ size: size })),
}))

export default useCheckoutStore
