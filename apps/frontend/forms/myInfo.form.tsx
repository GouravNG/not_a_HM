'use client'

import CustomButton from '@/components/atom/button.component'
import useCheckoutStore from '@/stores/checkout.store'
import { getLocalStorage, setLocalStorage } from '@/utils/localstorage'
import { MyInformationFormTypes } from '@repo/types/types'
import { IconCheck, IconEdit, IconX } from '@tabler/icons-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const MyInformationForm = () => {
    const { myInfo, isEditing, setMyInfo, toggleIsEditing } = useCheckoutStore()

    useEffect(() => {
        try {
            const localMyInfo = getLocalStorage<MyInformationFormTypes>('myInfo')
            if (localMyInfo instanceof Error) throw Error(localMyInfo.message)
            setMyInfo(localMyInfo)
        } catch (e) {
            if (e instanceof Error) console.log(`${e.message}`)
        }
    }, [])

    const {
        register,
        formState: { errors, isSubmitting, isDirty },
        handleSubmit,
    } = useForm<MyInformationFormTypes>()

    const submithandler = async (data: MyInformationFormTypes) => {
        setLocalStorage('myInfo', data)
        setMyInfo(data)
        isEditing && toggleIsEditing()
    }

    const handleEdit = (e: React.MouseEvent) => {
        e.preventDefault()
        toggleIsEditing()
    }

    return (
        <div className="bg-white p-4  px-6">
            <div className="w-full flex justify-between items-baseline">
                <p className="font-bold pb-4">My Information</p>
                {(myInfo.email || myInfo.firstName || myInfo.lastName) && (
                    <IconEdit onClick={(e) => handleEdit(e)} className="cursor-pointer" />
                )}
            </div>
            <div>
                <form className={`flex flex-col ${myInfo ? 'gap-2' : 'gap-4'}`} onSubmit={handleSubmit(submithandler)}>
                    {!myInfo.email || isEditing ? (
                        <div>
                            <label className="text-sm" htmlFor="email">
                                Email
                            </label>
                            <div className="flex border border-gray-400 p-1 py-3">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-2 outline-none"
                                    {...register('email', {
                                        required: 'Please enter a valid email address.',
                                    })}
                                />
                                {errors.email ? (
                                    <IconX color="red" stroke={0.7} />
                                ) : (
                                    isDirty && <IconCheck stroke={0.7} color="green" />
                                )}
                            </div>
                            {errors.email && <p className="text-sm text-hmred py-1 ">{errors.email.message}</p>}
                        </div>
                    ) : (
                        <p className="text-sm">{myInfo.email}</p>
                    )}
                    <div className={`flex w-full ${myInfo ? 'gap-1' : 'gap-6'}`}>
                        {!myInfo.firstName || isEditing ? (
                            <div className="w-full">
                                <label className="text-sm" htmlFor="firstName">
                                    First name
                                </label>
                                <div className="flex border border-gray-400 p-1 py-3 ">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-2 outline-none"
                                        {...register('firstName', {
                                            required: 'Please enter a first name.',
                                            minLength: {
                                                value: 3,
                                                message: 'First name should be atleast 3 characters long.',
                                            },
                                            validate: (value) =>
                                                !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/) ||
                                                'Special Charactors not allowed.',
                                        })}
                                    />
                                    {errors.firstName ? (
                                        <IconX color="red" stroke={0.7} />
                                    ) : (
                                        isDirty && <IconCheck stroke={0.7} color="green" />
                                    )}
                                </div>
                                {errors.firstName && (
                                    <p className="text-sm text-hmred py-1">{errors.firstName.message}</p>
                                )}
                            </div>
                        ) : (
                            <p className="text-sm">{myInfo.firstName}</p>
                        )}
                        {!myInfo.lastName || isEditing ? (
                            <div className="w-full">
                                <label className="text-sm" htmlFor="lastName">
                                    Last name
                                </label>
                                <div className="flex border border-gray-400 p-1 py-3 ">
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-2 outline-none"
                                        {...register('lastName', {
                                            required: 'Please enter a last name.',
                                            minLength: {
                                                value: 3,
                                                message: 'Last name should be atleast 3 characters long.',
                                            },
                                            validate: (value) =>
                                                !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/) ||
                                                'Special Charactors not allowed.',
                                        })}
                                    />
                                    {errors.lastName ? (
                                        <IconX color="red" stroke={0.7} />
                                    ) : (
                                        isDirty && <IconCheck stroke={0.7} color="green" />
                                    )}
                                </div>
                                {errors.lastName && (
                                    <p className="text-sm text-hmred py-1">{errors.lastName.message}</p>
                                )}
                            </div>
                        ) : (
                            <p className="text-sm">{myInfo.lastName}</p>
                        )}
                    </div>
                    {!myInfo && (
                        <div>
                            <p className="text-sm font-bold">MARKET</p>
                            <p className="text-sm font-bold">India</p>
                        </div>
                    )}
                    {(!myInfo.email || !myInfo.firstName || !myInfo.lastName || isEditing) && (
                        <div className="w-full font-bold py-1">
                            <CustomButton buttonText="Save" varient="BlackOne" type="submit" disabled={isSubmitting} />
                        </div>
                    )}
                    {isEditing && (
                        <div
                            className="flex items-center justify-center font-bold py-1 cursor-pointer"
                            onClick={toggleIsEditing}
                        >
                            <IconX />
                            <p>Cancel</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}
export default MyInformationForm

//TODO: On edit inpu filed to have already added value by default
