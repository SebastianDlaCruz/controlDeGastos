import { ChakraProvider } from '@chakra-ui/react'
import UserProvider from '@context/provider/UserProvider.context.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom"
import { router } from './router/Router.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>

        <RouterProvider router={router} />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
