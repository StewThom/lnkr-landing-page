import { ButtonBase, Divider, Grid, Stack, Typography } from "@mui/material"
import React, { useRef } from "react"
import { Link } from "react-router-dom"

const Footer = React.forwardRef((_props, ref) => {

  const year = () => {
    const year = new Date().getFullYear()
    return year.toString()
  }

  return (
    <Stack component="footer" spacing="6pt" sx={{ backgroundColor: (theme) => theme.palette.navbar.main, padding: "12pt 24pt" }}>
      <Grid container spacing={6} paddingLeft="2pt">
        <Grid item>
          <Stack alignItems="start">
            <Typography variant="h6" gutterBottom>Legal</Typography>
            <ButtonBase
              disableRipple
              component={Link}
              to="/cookie-policy">
              <Typography variant="caption">Cookie Policy</Typography>
            </ButtonBase>
            <ButtonBase
              disableRipple
              component={Link}
              to="/terms-and-conditions">
              <Typography variant="caption">Terms of Use</Typography>
            </ButtonBase>
            <ButtonBase
              disableRipple
              component={Link}
              to="/privacy-policy">
              <Typography variant="caption">Privacy Policy</Typography>
            </ButtonBase>
          </Stack>
        </Grid>
        <Grid item>
          <Stack alignItems="start">
            <Typography variant="h6" gutterBottom>Site</Typography>
            <ButtonBase
              disableRipple>
              <Typography variant="caption">Sitemap</Typography>
            </ButtonBase>
          </Stack>
        </Grid>
      </Grid>
      <Divider light />
      <Typography variant="caption" color="secondary" >© LNKR {year()}, All Rights Reserved</Typography>
    </Stack>
  )
})

export default Footer