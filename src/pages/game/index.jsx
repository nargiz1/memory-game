import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "../../components/card";
import Grid from "@mui/material/Grid";

import { final } from "../../utils/elements";

function Index() {

  const [current, setCurrent] = useState(false)
  const [second, setSecond] = useState(false)
  const [winCases, setWincases] = useState([])

  const handleClick = (elem, index) => {
    if (!current) {
      if (!winCases.some(x => x.name == elem.name)) {
        setCurrent({ elem, index })
      }
    } else {
      if (elem.name == current.elem.name && index != current.index) {
        if (!winCases.some(x => x.name == elem.name)) {
          setWincases([...winCases, elem])

          if(winCases.length===8){
            alert('U won!')
            setWincases([])
          }
        }
        setCurrent(false)
      } else {
        if(elem.name != current.elem.name){
          setSecond({elem, index})
        }
      }
      
    }
  }

  console.log(current)



  return (
    <Box sx={{ bgcolor: "#fff7ee", width: "100%", py: 13 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5} style={{ width: "100%" }}>
          {
            final.map((elem, index) => (
              <Grid key={index} item lg={2} xs={6} md={4} style={!second ? {cursor: 'pointer'} : {}} onClick={() => handleClick(elem, index)}>
                <Card
                  name={elem.name}
                  image={elem.image}
                  isWin={(winCases.find(x => x.name == elem.name)) ? true : false}
                  needTimer={(second) ? true : false}
                  setCurrent={setCurrent}
                  second={second ? true : false}
                  setSecond={setSecond}
                />
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}

export default Index;
