import { makeGetRequest } from '@/utils/httpRequest'
import { useQuery } from '@tanstack/react-query'
import { apiGetProductByProductId } from './api'

const useProductInfo = <T>(id: string) => {
    return useQuery<T>({
        queryKey: ['pdpInfo'],
        queryFn: () => makeGetRequest(apiGetProductByProductId(id)),
        refetchOnWindowFocus: false,
    })
}
export default useProductInfo
