'use client'

type TanStackProviderTypes = {
    children: React.ReactNode
}
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const TanStackProvider: React.FC<TanStackProviderTypes> = ({ children }) => {
    const tanClient = new QueryClient()
    return <QueryClientProvider client={tanClient}>{children}</QueryClientProvider>
}

export default TanStackProvider
