import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from './theme.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
