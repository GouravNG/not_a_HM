'use client'
import CustomButton from '@/components/atom/button.component'
import useCheckoutStore from '@/stores/checkout.store'
import { getLocalStorage, setLocalStorage } from '@/utils/localstorage'
import { BillingType } from '@repo/types/types'
import { IconChevronUp, IconEdit, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const BillingAddress = () => {
    const [isAddline2, toggleAddline] = useState(false)
    const { myInfo, BillingAddress, setBillingAddress, setFormEditing, isFormEditing } = useCheckoutStore()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BillingType>()

    useEffect(() => {
        try {
            const localBillingInfo = getLocalStorage<BillingType>('billingAddress')
            if (localBillingInfo instanceof Error) throw Error(localBillingInfo.message)
            setBillingAddress(localBillingInfo)
        } catch (e) {
            if (e instanceof Error) console.log(`${e.message}`)
        }
    }, [isFormEditing])

    const submitHandler = (data: BillingType) => {
        setLocalStorage('billingAddress', data)
        isFormEditing.BillingAddressFrom && setFormEditing('BillingAddressFrom')
    }

    const handleEdit = () => {
        setFormEditing('BillingAddressFrom')
        console.log(isFormEditing.BillingAddressFrom)
    }
    return (
        <div className="bg-white p-4 px-6">
            <div className="flex items-baseline justify-between  w-full">
                <p className={`font-bold ${Object.keys(BillingAddress).length && 'py-4'}`}>Billing address</p>
                {(BillingAddress.addline2 ||
                    BillingAddress.addline ||
                    BillingAddress.pincode ||
                    BillingAddress.state ||
                    BillingAddress.townCity) && <IconEdit className="cursor-pointer" onClick={handleEdit} />}
            </div>
            {myInfo.email && myInfo.firstName && myInfo.lastName && (
                <div>
                    {!Object.keys(BillingAddress).length && <p className="text-sm font-bold py-4">Billing address</p>}
                    <div className={`text-sm ${Object.keys(BillingAddress).length ? '' : 'py-2'}`}>
                        {!Object.keys(BillingAddress).length && <p>Name</p>}
                        <p>{`${myInfo.firstName} ${myInfo.lastName}`}</p>
                    </div>
                    <div>
                        <form
                            className={`flex flex-col ${Object.keys(BillingAddress).length ? '' : 'gap-2'}`}
                            onSubmit={handleSubmit(submitHandler)}
                        >
                            {BillingAddress.addline && !isFormEditing.BillingAddressFrom ? (
                                <p className="text-sm">{BillingAddress.addline}</p>
                            ) : (
                                <div>
                                    <label htmlFor="address" className="text-sm">
                                        Address <span className="text-hmred">*</span>
                                    </label>
                                    <div className="flex border border-gray-400 p-1 py-3">
                                        <input
                                            type="text"
                                            id="address"
                                            className="w-full px-2 outline-none"
                                            {...register('addline', {
                                                required: 'Please enter an address 1',
                                            })}
                                        />
                                        <IconX stroke={0.7} color="green" />
                                    </div>
                                    {errors.addline && (
                                        <p className="text-sm text-hmred py-1">{errors.addline?.message}</p>
                                    )}
                                </div>
                            )}
                            {BillingAddress.addline2 ||
                            (BillingAddress.addline && !isFormEditing.BillingAddressFrom) ? (
                                <p className="text-sm">{BillingAddress.addline2}</p>
                            ) : (
                                <div>
                                    <div
                                        className="flex text-sm items-center gap-1"
                                        onClick={() => toggleAddline(!isAddline2)}
                                    >
                                        <IconChevronUp stroke={0.7} />
                                        <span>Hide fileds</span>
                                    </div>
                                    {isAddline2 && !isFormEditing.BillingAddressFrom && (
                                        <div>
                                            <label htmlFor="address2" className="text-sm">
                                                Address Line 2
                                            </label>
                                            <div className="flex border border-gray-400 p-1 py-3">
                                                <input
                                                    type="text"
                                                    id="address2"
                                                    className="w-full px-2 outline-none"
                                                    {...register('addline2')}
                                                />
                                                <IconX stroke={0.7} color="green" />
                                            </div>
                                            <p className="text-sm text-gray-500 py-1">Flat No. / House name</p>
                                        </div>
                                    )}
                                </div>
                            )}
                            {BillingAddress.townCity && BillingAddress.pincode && !isFormEditing.BillingAddressFrom ? (
                                <p className="text-sm">{`${BillingAddress.pincode}, ${BillingAddress.townCity}`}</p>
                            ) : (
                                <div className="flex w-full gap-6">
                                    <div className="w-full">
                                        <label htmlFor="TC" className="text-sm">
                                            Town/City<span className="text-hmred">*</span>
                                        </label>
                                        <div className="flex border border-gray-400 p-1 py-3">
                                            <input
                                                type="text"
                                                id="TC"
                                                className="w-full px-2 outline-none"
                                                {...register('townCity', {
                                                    required: 'Please enter a Town/City',
                                                })}
                                            />
                                            <IconX stroke={0.7} color="green" />
                                        </div>
                                        {errors.townCity && (
                                            <p className="text-sm text-hmred py-1">{errors.townCity.message}</p>
                                        )}
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="pinncode" className="text-sm">
                                            Pincode<span className="text-hmred">*</span>
                                        </label>
                                        <div className="flex border border-gray-400 p-1 py-3">
                                            <input
                                                type="number"
                                                id="pincode"
                                                className="w-full px-2 outline-none"
                                                {...register('pincode', {
                                                    required: 'Please enter a pincode (ex.400070)',
                                                    minLength: { value: 6, message: 'Pincode should be 6 digits long' },
                                                    maxLength: { value: 6, message: 'Pincode should be 6 digits long' },
                                                })}
                                            />
                                            <IconX stroke={0.7} color="green" />
                                        </div>
                                        {errors.pincode && (
                                            <p className="text-sm text-hmred py-1">{errors.pincode.message}</p>
                                        )}
                                    </div>
                                </div>
                            )}
                            {BillingAddress.state && !isFormEditing.BillingAddressFrom ? (
                                <p className="text-sm">{BillingAddress.state}, India</p>
                            ) : (
                                <div>
                                    <label htmlFor="state" className="text-sm">
                                        State <span className="text-hmred">*</span>
                                    </label>
                                    <div className="flex border border-gray-400 p-1 py-3">
                                        <select
                                            id="state"
                                            className="w-full px-2 outline-none bg-white"
                                            {...register('state', {
                                                required: 'Please select a province',
                                                validate: (value) =>
                                                    value !== 'Select the state' || 'Please select a province',
                                            })}
                                        >
                                            <option>Select the state</option>
                                            <option>Karnataka</option>
                                            <option>Goa</option>
                                            <option>Kerala</option>
                                        </select>
                                        <IconX stroke={0.7} color="green" />
                                    </div>
                                    {errors.state && <p className="text-sm text-hmred py-1">{errors.state.message}</p>}
                                </div>
                            )}
                            {!Object.keys(BillingAddress).length ||
                                (isFormEditing.BillingAddressFrom && (
                                    <div className="w-full font-bold py-4">
                                        <CustomButton varient="BlackOne" buttonText="Save" type="submit" />
                                    </div>
                                ))}
                            {isFormEditing.BillingAddressFrom && (
                                <div
                                    className="flex items-center justify-center font-bold py-1 cursor-pointer"
                                    onClick={(e) => setFormEditing('BillingAddressFrom')}
                                >
                                    <IconX />
                                    <p>Cancel</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BillingAddress
