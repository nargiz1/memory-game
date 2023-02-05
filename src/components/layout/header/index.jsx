import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { Badge } from '../../../utils/styled-components'
import { FaRegLightbulb } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { FaDoorOpen } from 'react-icons/fa'

const iconStyle = {
  marginLeft: "10px"
}
const padding = {
  paddingTop: '22px',
}

function Index() {
  return (
    <Box sx={{ bgcolor: "white", width: "100%", pt: 3, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Badge><FaRegLightbulb />Memory Game</Badge>
          </Grid>
          <Grid item xs={5}>
            <Grid container spacing={2}>
              <Grid item xs={6} style={padding}>
                Back to main
                <AiFillHome style={iconStyle} />
              </Grid>
              <Grid item xs={6} style={padding}>
                Leave the Game
                <FaDoorOpen style={iconStyle} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Index;
