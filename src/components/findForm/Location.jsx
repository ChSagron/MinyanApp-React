import { useEffect, useState } from "react";
import { Button, Card, TextField } from "@mui/material";
import { GetTop10 } from "../../data/servers/synagoguesServer";

const Location = ({ handleLocation, color, locationExists }) => {

  const [locationDetails, setLocationDetails] = useState(
    {
      city: "",
      street: "",
      number: "",
    }
  );

  useEffect(() => {
    if (locationExists != null) {
      setLocationDetails(locationExists);
    }
  }, [locationExists])

  const example1 = { lat: 21, lng: 31 };
  const example2 = { lat: 22, lng: 32 };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocationDetails({ ...locationDetails, [name]: value });
  };

  const findLocation = async () => {
    // console.log("find Location");
    handleLocation("location", example1);
    await GetTop10(example1);
  };

  const convertLocation = async () => {
    // console.log("convert Location");
    if (locationDetails.street != "" && locationDetails.city != "" && locationDetails.number != "") {
      handleLocation("location", example2);
      await GetTop10(example2);
    }
  };

  return (
    <>
      <Card
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          m: "2% 0",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          color={color}
          size="small"
          label="רחוב"
          name="street"
          value={locationDetails.street}
          onChange={handleChange}
        />

        <TextField
          color={color}
          size="small"
          label="עיר"
          name="city"
          value={locationDetails.city}
          onChange={handleChange}
        />

        <TextField
          color={color}
          size="small"
          label="מספר"
          name="number"
          value={locationDetails.number}
          onChange={handleChange}
        />

        <Button color={color} onClick={findLocation} >אתר מיקום</Button>
        <Button color={color} onClick={convertLocation}>שמור</Button>

      </Card >


    </>
  );
}

export default Location;