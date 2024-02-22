import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { ToggleButton, ToggleButtonGroup, InputAdornment, TextField, Button } from "@mui/material";
import FindRadius from "./FindRadius";
import Location from "./Location";
import FindDate from "./FindDate";
import FindTime from "./FindTme";
import synagogueStore from "../../data/stores/synagogueStore"
import SynagogueListView from "./SynagogueListView";
import dataStore from "../../data/stores/dataStore"



const FindForm = (observer(() => {

    const [findForm, setFindForm] = useState(
        {
            prayer: "",
            location: {
                lat: "",
                lng: "",
                city: "",
                street: "",
                number: "",
            },
            radius: "",
            place: "",
            isFixed: "",
            date: {
                dd: "",
                mm: "",
                yyyy: "",
            },
            time: {
                hh: "",
                mm: "",
            },
            timeRange: "",
            synagogues: [],
        });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFindForm({ ...findForm, [name]: value });
    }

    const handleFromChild = (key, value) => {
        setFindForm({ ...findForm, [key]: value });
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dataStore.SetFindMinyan(findForm);
        // console.log("handleSubmit - findForm:", dataStore.findForm);
        navigate("/findResult/options");
    }

    return (
        <>
            <form >

                {/* prayer type */}
                <ToggleButtonGroup
                    aria-label="prayer"
                    value={findForm.prayer}
                    onChange={handleChange}
                >
                    <ToggleButton name="prayer" value="1">שחרית</ToggleButton>
                    <ToggleButton name="prayer" value="2">מנחה</ToggleButton>
                    <ToggleButton name="prayer" value="3">ערבית</ToggleButton>
                </ToggleButtonGroup>


                {/* location */}
                <Location handleLocation={handleFromChild} />

                {/* radius */}
                <FindRadius handleRadius={handleFromChild} />


                {/* place */}
                <ToggleButtonGroup
                    aria-label="place"
                    value={findForm.place}
                    onChange={handleChange}
                >
                    <ToggleButton name="place" value="city">יישוב</ToggleButton>
                    <ToggleButton name="place" value="open">שטח פתוח</ToggleButton>
                </ToggleButtonGroup>
                <br />


                {/* repeat */}
                <ToggleButtonGroup
                    aria-label="isFixed"
                    value={findForm.isFixed}
                    onChange={handleChange}
                >
                    <ToggleButton name="isFixed" value="1">קבוע</ToggleButton>
                    <ToggleButton name="isFixed" value="0">חד פעמי</ToggleButton>
                </ToggleButtonGroup>
                <br />


                {/* date */}
                {findForm.isFixed === "0" ? <FindDate handleDate={handleFromChild} /> : null}


                {/* time */}
                <FindTime handleTime={handleFromChild} />

                {/* timeRange */}
                <TextField
                    label="טווח"
                    name="timeRange"
                    value={findForm.timeRange}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">טווח זמן אפשרי</InputAdornment>,
                        endAdornment: <InputAdornment position="end">דקות</InputAdornment>,
                    }}
                />
                <br />

                {/*  ♥ synagogues list - order by distanse */}
                {findForm.place === "city" && location && synagogueStore.synagogueList.length > 0 ? <SynagogueListView /> : null}

                <Button onClick={handleSubmit}>שמור</Button>

            </form>
        </>
    );
}))

export default FindForm;