import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './app/routes/AppRoutes'
import AuthProvider from './app/providers/AuthProvider'
import QueryProvider from './app/providers/QueryProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>,
)
