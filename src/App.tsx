import { Box, CssBaseline, Typography } from '@mui/material'
import NavBar from './UI/Components/Nav Bar/NavBar'
import ThemeProvider from './Theme/ThemeProvider'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router'
import Home from './UI/Pages/Home'

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column" , minHeight: "100vh", alignItems: "stretch" }}>
        <NavBar />
        <Box sx={{ margin: { mobile: "12pt 0pt 24pt 0pt", tablet: "24pt auto" }, width: { mobile: "100%", tablet: "70%" } }} flex={1}>
          <Box sx={{ height: (theme) => theme.mixins.toolbar }}></Box>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Suspense>
          </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
