/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { SkuInfoType } from '@repo/types/types'

type PDPStoreTypes = {
    skuInfo: SkuInfoType | undefined
    setSkuInfo: (si: SkuInfoType) => void
}

const useProductStore = create<PDPStoreTypes>((set) => ({
    skuInfo: undefined,
    setSkuInfo: (si: SkuInfoType) => set(() => ({ skuInfo: si })),
}))

export default useProductStore
