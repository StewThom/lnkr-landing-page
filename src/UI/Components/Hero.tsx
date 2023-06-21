import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"

import ProductImage from '../../Resources/Images/product_image.png';

const Hero: React.FC = () => {

  return (
    <Paper elevation={0} sx={{ borderRadius: { mobile: "0pt", tablet: "8pt" }, maxWidth: "1200pt" }}>
      <Grid container spacing={2}>
        <Grid item mobile={12} tablet={4}>
          <Stack alignItems="start" spacing="12pt" sx={{ paddingLeft: "48pt", paddingTop: "48pt" }}>
            <Typography variant="h2">Share contact details with ease</Typography>
            <Typography variant="body1">LNKR is the most versatile way of sharing contact details</Typography>
            <Typography variant="body1">Simply select the details you want to share and have the other person scan the generated QR code</Typography>
            <Button
              disableRipple
              variant="contained"
              href={`https://app.${window.location.host}/signup`}>
              Get Started
            </Button>
          </Stack>
        </Grid>
        <Grid item mobile={12} tablet={8} sx={{ overflow: "hidden" }}>
          <Box sx={{ width: { mobile: "100%", tablet: "100%" }}}>
            <img src={ProductImage} style={{ width: "100%", height: "100%" }} alt="Screenshot of apps app" />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Hero
