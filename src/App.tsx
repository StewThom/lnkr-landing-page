import { Box, CssBaseline } from '@mui/material'
import NavBar from './UI/Components/Footer/Nav Bar/NavBar'
import ThemeProvider from './Theme/ThemeProvider'
import { Suspense, useLayoutEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router'
import Home from './UI/Pages/Home'
import DocumentViewer from './UI/Pages/DocumentViewer'
import { IubendaDocument } from './Services/IubendaService'
import Footer from './UI/Components/Footer/Footer'
import ScrollToTop from './UI/ScrollToTop'

function App() {

  const [, setFooterHeight] = useState(0)
  var footerRef = useRef()

  useLayoutEffect(() => {
    if (footerRef?.current != null) {
      setFooterHeight(footerRef.current["clientHeight"])
    }
  })

  return (
    <ThemeProvider>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column" , minHeight: "100vh", alignItems: "stretch" }}>
        <NavBar />
        <Box sx={{ margin: { mobile: "12pt 0pt 24pt 0pt", tablet: "24pt auto" }, width: { mobile: "100%", tablet: "70%" } }} flex={1}>
          <Box sx={{ height: (theme) => theme.mixins.toolbar }}></Box>
            <Suspense fallback={null}>
              <ScrollToTop>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='terms-and-conditions' element={<DocumentViewer type={IubendaDocument.TermsAndConditions}/>} />
                  <Route path='privacy-policy' element={<DocumentViewer type={IubendaDocument.PrivacyPolicy}/>} />
                  <Route path='cookie-policy' element={<DocumentViewer type={IubendaDocument.CookiePolicy}/>} />
                </Routes>
              </ScrollToTop>
            </Suspense>
          </Box>
          <Footer ref={footerRef} />
      </Box>
    </ThemeProvider>
  )
}

export default App
