import { QueryClientProvider } from 'react-query'
import { Routes } from './Routes'
import './styles/global.css'
import { queryCliente } from './lib/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <Routes />
    </QueryClientProvider>
  )
}
