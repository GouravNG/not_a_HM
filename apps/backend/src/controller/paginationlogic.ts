const getPaginatedData = <T>(a: string, b: string, data: T[]) => {
    const page = parseInt(a)
    const size = parseInt(b)
    const startIndex = size * (page - 1)
    const endIndex = size * page
    const allPages = Math.ceil(data.length / size)
    const paginationNode = {
        page: { page: page, size: size, count: allPages },
        paginatedData: data.slice(startIndex, endIndex),
    }
    return paginationNode
}
export default getPaginatedData
