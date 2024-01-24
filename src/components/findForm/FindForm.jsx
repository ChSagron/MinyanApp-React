import { useState } from "react";
import { ToggleButton, Checkbox, FormControlLabel, FormGroup, ToggleButtonGroup, InputAdornment, TextField, Paper } from "@mui/material";
import CheckList from "./CheckList";
import Location from "./Location";
import FormDate from "./FormDate";
import FormTime from "./FormTme";



const FindForm = () => {

    const [repeat, setRepeat] = useState("");
    const [data, setData] = useState(null);

    const [place, setPlace] = useState("");
    const [type, setType] = useState("");

    const [range, setRange] = useState("");



    const [location, setLocatione] = useState("");
    const [distance, setDistance] = useState("");


    const handleChangeRepeat = (event, newValue) => {
        if (newValue !== null) {
            setRepeat(newValue);
        }
    };
    const handleChangePlace = (event, newValue) => {
        if (newValue !== null) {
            setPlace(newValue);
        }
    };
    const handleChangeType = (event, newValue) => {
        if (newValue !== null) {
            setType(newValue);
        }
    };

    const handleChangeRange = (event, newValue) => {
        if (newValue !== null) {
            setRange(newValue);
        }
    };

    const handleChangeLocation = (event, newValue) => {
        if (newValue !== null) {
            setLocation(newValue);
        }
    };





    return (
        <>
            <form>

                <ToggleButtonGroup
                    value={repeat}
                    exclusive
                    onChange={handleChangeRepeat}
                    aria-label="repeat"
                    color="primary"
                    fullWidth

                >
                    <ToggleButton value="fixed">קבוע</ToggleButton>
                    <ToggleButton value="once">חד פעמי</ToggleButton>
                </ToggleButtonGroup>
                <br />
                {repeat == "once" ? <FormDate /> : null}


                <FormTime />

                <ToggleButtonGroup
                    value={place}
                    exclusive
                    onChange={handleChangePlace}
                    aria-label="place"
                    color="primary"
                    fullWidth
                >
                    <ToggleButton value="city">יישוב</ToggleButton>
                    <ToggleButton value="open">שטח פתוח</ToggleButton>
                </ToggleButtonGroup>
                <br />

                <ToggleButtonGroup
                    value={type}
                    exclusive
                    onChange={handleChangeType}
                    aria-label="type"
                    color="primary"
                    fullWidth
                >
                    <ToggleButton value="1">שחרית</ToggleButton>
                    <ToggleButton value="2">מנחה</ToggleButton>
                    <ToggleButton value="3">ערבית</ToggleButton>
                </ToggleButtonGroup>

                <Location  />

                <Paper variant="outlined">
                    <TextField
                        label="טווח"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">טווח מרחק אפשרי</InputAdornment>,
                        }}
                        variant="filled"
                    />

                    <ToggleButtonGroup
                        value={range}
                        exclusive
                        onChange={handleChangeRange}
                        aria-label="range"
                        color="primary"

                    >
                        <ToggleButton value="minutes">דק' הליכה</ToggleButton>
                        <ToggleButton value="km">קילומטר</ToggleButton>
                    </ToggleButtonGroup>
                </Paper>

                {place == "city" && location ? <CheckList /> : null}

            </form>
        </>
    );
}

export default FindForm;