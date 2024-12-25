const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN ?? ''

export const makeGetRequest = async (requestURL: string, cacheProp: RequestCache = 'default') => {
    try {
        const data = await fetch(`${API_DOMAIN}${requestURL}`, { cache: cacheProp })
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

export const makeMutationRequest = async (type: 'POST' | 'PATCH' | 'DELETE', requestURL: string, postBody: any) => {
    try {
        const data = await fetch(`${API_DOMAIN}${requestURL}`, {
            method: type,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postBody),
        })
        if (data.ok) {
            return await data.json()
        } else {
            throw new Error('HTTP error!!1')
        }
    } catch (e) {
        if (e instanceof Error) {
            throw new Error('Something went wrong!!')
        }
    }
}
