import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

const Location = (handleSave) => {

  const [locationData, setLocationData] = useState(
    {
      street: "",
      num: "",
      city: "",
    }
  );

  const [ location , setLocation ] = useState(
    {
      
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocationData({ ...locationData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(locationData);
    findLocation();
  }

  const handleLocation = () => {
    console.log("handleLocation");

  }

  const findLocation = () => {
    console.log("findLocation");

  }

  return (
    <>
      <Box variant="outlined"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="רחוב" variant="filled"
            name="street"
            value={locationData.street}
            onChange={handleChange}
          />

          <TextField id="filled-basic" label="עיר" variant="filled"
            name="city"
            value={locationData.city}
            onChange={handleChange}
          />

          <TextField id="filled-basic" label="מספר" variant="filled"
            name="num"
            value={locationData.num}
            onChange={handleChange}
          />
          
          <Button variant="outlined" onClick={handleLocation} >אתר מיקום</Button>
          <Button variant="outlined" onClick = {handleSubmit}>שמור</Button>

        </Box>


    </>
  );
}

export default Location;