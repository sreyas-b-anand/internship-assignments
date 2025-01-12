import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query" 
import './index.css'
import App from './App.jsx'
import {AuthContextProvider} from './context/AuthContextProvider.jsx'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </AuthContextProvider>
  
  </StrictMode>,
)
