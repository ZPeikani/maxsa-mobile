import { Box, Typography } from "@mui/material";
import Tech from "../../assets/icons/tech.svg"
import Guarantee from"../../assets/icons/guarantee.svg"
import Send from"../../assets/icons/Frame 26086041.svg"
import Time from"../../assets/icons/icon.svg"


export default function Services() {
  return (
    <Box marginTop={4} display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" gap={1}>
          <Box component="img" src={Tech.src} />
          <Typography>Latest and Greatest Tech</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Box component="img" src={Guarantee.src} />
          <Typography>Guarantee</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Box component="img" src={Send.src} />
          <Typography>Free Shipping over 1000$</Typography>
        </Box>
        <Box display="flex" gap={1}>
          <Box component="img" src={Time.src} />
          <Typography>24/7 Support</Typography>
        </Box>
      </Box>
  )
}
