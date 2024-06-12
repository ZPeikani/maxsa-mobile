import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

export default function TechnicalDetails() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom marginTop={1.5}>
        Technical Details
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", width: "720px" }}
      >
        <Table>
          <TableBody>
            <TableRow sx={{ backgroundColor: "#F9F9F9" }}>
              <TableCell sx={{ color: "#717171" }}>Description</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>
                The Dell XPS 13 laptop is perfect for work, school, or
                entertainment. It features a fast Intel Core i7 processor, 16GB
                of RAM, and a spacious 512GB SSD.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ color: "#717171" }}>Width</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>13.4 inches</TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#F9F9F9" }}>
              <TableCell sx={{ color: "#717171" }}>Height</TableCell>
              <TableCell sx={{ paddingLeft: "50px" }}>0.58 inches</TableCell>
            </TableRow>
            <TableCell sx={{ color: "#717171" }}>Depth</TableCell>
            <TableCell sx={{ paddingLeft: "50px" }}>8.5 inches</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
