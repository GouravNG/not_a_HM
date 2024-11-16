const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN ?? ''

export const makeGetRequest = async (requestURL: string) => {
    try {
        const data = await fetch(`${API_DOMAIN}${requestURL}`)
        if (data.ok) {
            return await data.json()
        } else {
            throw new Error('HTTP error!!')
        }
    } catch (e) {
        if (e instanceof Error) {
            throw new Error('Something went wrong')
        }
    }
}
