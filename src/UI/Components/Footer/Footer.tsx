import { ButtonBase, Divider, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const Footer = React.forwardRef((_props, ref) => {

  const year = () => {
    const year = new Date().getFullYear()
    return year.toString()
  }

  return (
    <Stack component="footer" spacing="12pt" sx={{ backgroundColor: (theme) => theme.palette.navbar.main, padding: "12pt 24pt" }}>
      <Grid container spacing="16pt" paddingLeft="2pt">
        <Grid item>
            <ButtonBase
              disableRipple
              component={Link}
              to="/cookie-policy">
              <Typography variant="body2">Cookie Policy</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              disableRipple
              component={Link}
              to="/terms-and-conditions">
              <Typography variant="body2">Terms of Use</Typography>
            </ButtonBase>
          </Grid>
          <Grid item>
            <ButtonBase
              disableRipple
              component={Link}
              to="/privacy-policy">
              <Typography variant="body2">Privacy Policy</Typography>
            </ButtonBase>
        </Grid>
      </Grid>
      <Divider light />
      <Typography variant="caption" color="secondary" >© LNKR {year()}, All Rights Reserved</Typography>
    </Stack>
  )
})

export default Footer