import { makeGetRequest, makeMutationRequest } from '@/utils/httpRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiAddItemsToCart, apiGetCart } from './api'
import { CartType } from '@repo/types/types'

export const useGetCart = <T>() =>
    useQuery<T>({ queryKey: ['cart'], queryFn: () => makeGetRequest(apiGetCart()), refetchOnWindowFocus: false })

export const useAddItemToCart = (item: CartType) => {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: () => makeMutationRequest('POST', apiAddItemsToCart(), item),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
    })
}

export const useUpdateCart = (updateItem: Partial<CartType>) => {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: () => makeMutationRequest('POST', apiAddItemsToCart(), updateItem),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
    })
}

export const useRemoveCart = (idToRemove: { id: number }) => {
    const qc = useQueryClient()
    return useMutation({
        mutationFn: () => makeMutationRequest('POST', apiAddItemsToCart(), idToRemove),
        onSuccess: () => qc.invalidateQueries({ queryKey: ['cart'] }),
    })
}
