import type { ProductDataType } from '@repo/types/types'

const getProductById = (id: string, data: ProductDataType[]) => {
    try {
        return data.filter((i) => {
            return i.id === id
        })[0]
    } catch (e) {
        return {
            code: 500,
            message: 'something went wrong!!',
        }
    }
}
export default getProductById
