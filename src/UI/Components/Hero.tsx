import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material"

import ProductImage from '../../Resources/Images/product_image.png';

const Hero: React.FC = () => {

  return (
    // <Paper elevation={0} sx={{ borderRadius: { mobile: "0pt", tablet: "8pt" }, maxWidth: "1200pt" }}>
      <Grid container spacing={2}>
        <Grid item mobile={12} tablet={6}>
          <Stack alignItems="start" spacing="12pt" sx={{ paddingLeft: "48pt", paddingTop: "48pt" }}>
            <Typography variant="h1">Simply <span style={{ background: "linear-gradient(45deg, #ff015b 10%, 50%, #41c7e0 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>share</span> contact details</Typography>
            <Typography variant="h2">Share contact details with a snap of a camera</Typography>
            <Typography variant="h2">Only share what you want, and nothing more</Typography>
            <Button
              disableRipple
              variant="contained"
              href={`https://app.${window.location.host}/signup`}>
                <Typography variant="h3">Sign Up</Typography>
            </Button>
          </Stack>
        </Grid>
        <Grid item mobile={12} tablet={6} sx={{ overflow: "hidden" }}>
          <Box sx={{ width: { mobile: "100%", tablet: "100%" }}}>
            <img src={ProductImage} style={{ width: "100%", height: "100%" }} alt="Screenshot of apps app" />
          </Box>
        </Grid>
      </Grid>
    // </Paper>
  )
}

export default Hero
