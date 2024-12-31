/* eslint-disable no-unused-vars */
import { BillingType, MyInfoSavedState, TCheckoutFormEditing } from '@repo/types/types'
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
    BillingAddress: Partial<BillingType>
    setBillingAddress: (savedBillingAddress: Partial<BillingType>) => void
    isFormEditing: TCheckoutFormEditing
    setFormEditing: (formName: keyof TCheckoutFormEditing) => void
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
    BillingAddress: {},
    setBillingAddress: (BillingAddress) => set(() => ({ BillingAddress: BillingAddress })),
    isFormEditing: { myInformationForm: false, BillingAddressFrom: false },
    setFormEditing: (formName) =>
        set((state) => ({
            isFormEditing: {
                ...state.isFormEditing,
                [formName]: !state.isFormEditing[formName],
            },
        })),
}))

export default useCheckoutStore
