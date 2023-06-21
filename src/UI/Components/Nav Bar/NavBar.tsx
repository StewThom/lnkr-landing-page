import { AppBar, Button, Toolbar, Box } from "@mui/material"
import React from "react"
import { useTheme } from "@emotion/react"
import { Link } from "react-router-dom"

declare module "@mui/material/AppBar" {
  interface AppBarPropsColorOverrides {
    navbar: true
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    navbarText: true
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    navbarText: true
  }
}

const NavBar: React.FC = () => {

  const theme: any = useTheme()

  const buttonStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    '&:hover': {
      background: "palette.secondary",
    }
  }

  const toolbarStyle = {
    zIndex: theme.zIndex.drawer + 2,
    borderBottom: process.env.REACT_APP_STAGE === "production" ? "unset" : "1pt solid #ff0000"
  }

  const host = () => {
    let host = window.location.host
    let components = host.split(".")
    components.shift()
    return components
  }

  return (
    <div>
      <AppBar
        color="navbar"
        enableColorOnDark
        position="fixed"
        sx={{
          borderBottom: "1pt solid #fff2",
          boxShadow: (theme) => theme.palette.mode == "dark" ? "unset" : theme.shadows[3],
          backgroundImage: "unset",
          zIndex: (theme) => theme.zIndex.drawer + 100
        }}>
        <Toolbar sx={toolbarStyle}>
          <Box sx={{ flexGrow: 1, display: { mobile: 'flex', tablet: 'flex' } }}>
            <Button
              disableRipple
              size="large"
              color="navbarText"
              component={Link}
              to="/"
              sx={buttonStyle}>
              LNKR
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              disableRipple
              variant="outlined"
              size="large"
              color="navbarText"
              href={`https://app.${host}`}
              sx={buttonStyle}>
              Open App
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
