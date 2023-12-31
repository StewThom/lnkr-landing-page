import { AppBar, Button, Toolbar, Box, Icon } from "@mui/material"
import React from "react"
import { useTheme } from "@emotion/react"
import { Link } from "react-router-dom"

import OpenIcon from "@mui/icons-material/OpenInNew"
import AppIcon from "../../../Resources/Icons/Icon/icon.png"

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
    return components.join(".")
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
              sx={buttonStyle}
              startIcon={<img src={AppIcon} height={20} width={20} />}>
              LNKR
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              disableRipple
              size="large"
              color="navbarText"
              endIcon={<OpenIcon />}
              href={`https://app.${host()}`}
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
