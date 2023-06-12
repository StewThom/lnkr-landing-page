import { createTheme, PaletteMode, ThemeProvider as MaterialThemeProvider, useMediaQuery } from "@mui/material"
import React, { useLayoutEffect } from "react"

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
}

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    navbar: Palette['primary']
    navbarText: Palette['primary']
  }
  interface PaletteOptions {
    navbar: PaletteOptions['primary']
    navbarText: PaletteOptions['primary']
  }
}

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  useLayoutEffect(() => {
  }, [prefersDark])

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'light' ? {
          main: "#ff2d55"
        } : {
          main: "#ff375f"
        })
      },
      secondary: {
        main: '#999',
      },
      navbar: {
        main: "#141212",
      },
      navbarText: {
        main: "#eee"
      },
      text: {
        ...(mode === 'light' ? {
          primary: "#2e2e2e",
          secondary: "#0f0"
        } : {
          primary: "#eee",
          secondary: "#ccc"
        })
      },
      background: {
        ...(mode === 'light' ? {
          paper: "#fff",
          default: "#ddd"
        } : {
          paper: "#141212",
          default: "#333"
        })
      }
    },
    typography: {
      allVariants: {
        fontFamily: ["Futura", "sans-serif"].join(','),
      },
      h1: {
        fontWeight: "bold",
        fontSize: "3.5rem"
      },
      h2: {
        fontWeight: "bold",
        fontSize: "1.4rem"
      },
      h3: {
        fontWeight: "bold",
        fontSize: "1.2rem"
      },
      h4: {
        fontWeight: "bold",
        fontSize: "1rem"
      },
      h5: {
        fontWeight: "bold",
        fontSize: "0.8rem"
      },
      h6: {
        fontWeight: "bold",
        fontSize: "0.7rem"
      }
    },
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200
      }
    }
  })

  const theme = createTheme(getDesignTokens(prefersDark ? 'dark' : 'light'))

  return(
    <MaterialThemeProvider theme={theme}>
      {children}
    </MaterialThemeProvider>
  )
}

export default ThemeProvider