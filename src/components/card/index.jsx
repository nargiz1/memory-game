import React, { useEffect, useState } from "react";

function Index({ name, image, isWin, needTimer, setCurrent, second, setSecond }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    if(!second){
      setOpen(true)
    }
  }
  useEffect(() => {
    if (needTimer && (!isWin)) {
      setTimeout(() => {
        setOpen(false)
        setCurrent(false)
        setSecond(false)
      }, 2000)
    }
  }, [needTimer, isWin]) 

  return (
    <div
      onClick={() => handleOpen()}
      name={name}
      style={
        {
        backgroundColor: "white",
        padding: "15px",
        width: "100%",
        height: "140px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
      
    }
    >
      {
        (open || isWin) && (
          <img src={image} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        )
      }

    </div>
  );
}

export default Index;
