import React from 'react'

import './App.css'
import HeaderBar from './UI/HeaderBar'
import { ThemeProvider } from '@mui/icons-material/styles'
import theme from './utils/theme'
import Box from '@mui/material/box'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CssBaseLine from '@mui/material/CssBaseLine'

import Homepage from './pages/Homepage'
import CarList from './pages/CarList'
import CustomerList from './pages/CustomerList'



function App() {

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseLine /> {/* Reseta o CSS padrão e o adapta para o tema */}
          <Box sx={{
            width: '100vw', // toda a largura da janela
            minHeight: '100vw', // no mínimo, toda a altura da janela
            // cinza escuro, no modo dark
            backgroundColor: 'background.default'
          }}>
            <HeaderBar />
            <Box sx={{ m: '25px'/* Margem de 25px de todos os lados */ }}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/cars" element={<CarList />} />
                <Route path="/customers" element={<CustomerList />} />
              </Routes>
            </Box>
        </ThemeProvider >
      </BrowserRouter>

    </>
  )
}

export default App
