'use client'

import { IconX } from '@tabler/icons-react'
import { create } from 'zustand'

type ComponentStoreType = {
    absoluteComponent: React.ReactNode | null
    setAbsoluteComponent: (component: React.ReactNode) => void
    isAbsolute: boolean
    toggleIsAbsolute: () => void
}

const useAbsoluteContainerStore = create<ComponentStoreType>((set) => ({
    absoluteComponent: null,
    setAbsoluteComponent: (component) => set({ absoluteComponent: component }),
    isAbsolute: false,
    toggleIsAbsolute: () => set((state) => ({ isAbsolute: !state.isAbsolute })),
}))

export const AbsoluteContainer = () => {
    const { toggleIsAbsolute, absoluteComponent, isAbsolute } = useAbsoluteContainerStore()
    const baseStyle = `absolute w-full bg-gray-700 bg-opacity-20 items-center justify-center z-10`
    const visibility = isAbsolute ? 'flex' : 'hidden'

    return (
        <>
            <div className={`${baseStyle} ${visibility} h-screen`}>
                <h1 className="w-10/12 h-full">{absoluteComponent}</h1>
                <div className="w-2/12 h-full flex items-center justify-center">
                    <IconX onClick={toggleIsAbsolute} />
                </div>
            </div>
        </>
    )
}

export const useAbsoluteContainer = () => {
    const { setAbsoluteComponent, toggleIsAbsolute } = useAbsoluteContainerStore()
    return { setAbsoluteComponent, toggleIsAbsolute }
}
