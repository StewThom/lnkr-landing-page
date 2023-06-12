import { Button, Grid, Paper, Stack, Typography } from "@mui/material"

const Hero: React.FC = () => {

  return (
    <Paper elevation={0} sx={{ borderRadius: { mobile: "0pt", tablet: "8pt" } }}>
      <Grid container spacing={2}>
        <Grid item mobile={12} tablet={6}>
          <Stack alignItems="start" spacing="12pt" sx={{ padding:"20pt" }}>
          <Typography variant="h2">Share contact details with ease</Typography>
          <Typography variant="body1">LNKR is the most versatile way of sharing contact details</Typography>
          <Button
            variant="contained">
            Get Started
          </Button>
          </Stack>
        </Grid>
        <Grid item mobile={12} tablet={6}>
          Image
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Hero
