import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Index() {
  return (
    <Box sx={{ bgcolor: "white", width: "100%", pt: 3, pb: 3 }}>
      <Container maxWidth="lg">
        <h2 style={{ margin: 0 }}>Header</h2>
      </Container>
    </Box>
  );
}

export default Index;
