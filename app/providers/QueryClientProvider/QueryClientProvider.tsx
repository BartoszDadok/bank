import { PropsWithChildren } from "react"
import {
  QueryClient,
  QueryClientProvider as QueryClientProviderWrapper,
} from "@tanstack/react-query"

const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProviderWrapper client={queryClient}>{children}</QueryClientProviderWrapper>
)

export { QueryClientProvider, queryClient }
