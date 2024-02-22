import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Box, Button, Checkbox, FormControlLabel, Popper, ToggleButton, ToggleButtonGroup } from "@mui/material"
import FindTime from "../findForm/FindTme";
import FindDate from "../findForm/FindDate";
import { AddMinyanToSynagogue } from "../../data/servers/minyansServer"
import dataStore from "../../data/stores/dataStore"


const MinyanForm = (observer(() => {
    const basic = {
        prayer: "",
        // location: {
        //     lat: "",
        //     lng: "",
        //     city: "",
        //     street: "",
        //     number: "",  
        // },
        // nusach: "",
        isFixed: true,
        date: {
            dd: "01",
            mm: "01",
            yyyy: "2000",
        },
        time: {
            hh: "",
            mm: "",
        },
    }
    const [minyanForm, setMinyanForm] = useState({ ...basic });

    const handleChange = (event) => {
        var { name, value } = event.target;
        setMinyanForm({ ...minyanForm, [name]: value });
    }

    const handleChecked = (event) => {
        const { name, checked } = event.target;
        setMinyanForm({ ...minyanForm, [name]: checked });
    }

    // data from date/time
    const handleFromChild = (key, value) => {
        setMinyanForm({ ...minyanForm, [key]: value });
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setAnchorEl(null);

        // convert dateTime
        const dateTimeString = `${minyanForm.date.yyyy}-${minyanForm.date.mm}-${minyanForm.date.dd}T${minyanForm.time.hh}:${minyanForm.time.mm}:00.000Z`;
        setMinyanForm(
            {
                prayer: parseInt(minyanForm.prayer),
                isFixed: minyanForm.isFixed,
                dateTime: dateTimeString
            });
    }

    useEffect(() => {
        if (typeof minyanForm.prayer === 'number') // only if submited
        {
            // todo! fix server, limit search by synagogue id

            // ♥ adding minyan - only if date-time not exists
            // ♥ Notification according to the result (in server func)
            AddMinyanToSynagogue(minyanForm, dataStore.user.synagogue.id);
            setMinyanForm({ ...basic });
        }
    }, [minyanForm]);


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    return (
        <>
            <div>
                <Button color="secondary" aria-describedby={id} onClick={handleClick}>
                    הוספת מניין
                </Button>

                <Popper id={id} open={open} anchorEl={anchorEl}>

                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>

                        <form >

                            {/* prayer type */}
                            <ToggleButtonGroup
                                color="secondary"
                                aria-label="prayer"
                                value={minyanForm.prayer}
                                onChange={handleChange}
                            >
                                <ToggleButton name="prayer" value="1">שחרית</ToggleButton>
                                <ToggleButton name="prayer" value="2">מנחה</ToggleButton>
                                <ToggleButton name="prayer" value="3">ערבית</ToggleButton>
                            </ToggleButtonGroup>
                            <br />

                            <FormControlLabel control={<Checkbox color="secondary" defaultChecked name="isFixed" value={!minyanForm.isFixed} onChange={handleChecked} />} label="קבוע" />
                            <br />

                            {minyanForm.isFixed === false ? <FindDate color="secondary" handleDate={handleFromChild} /> : null}

                            <FindTime color="secondary" handleTime={handleFromChild} />
                            <br />
                            <Button color="secondary" onClick={handleSubmit}>שמור</Button>

                        </form>
                    </Box>
                </Popper>
            </div>

        </>
    );

}))

export default MinyanForm;