import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Location from "../findForm/Location";
import MinyanForm from "./MinyanForm";
import MinyanListView from "./MinyanListView";
import dataStore from "../../data/stores/dataStore"


const SynagogueForm = (observer(() => {

    // todo! → in server - add synagogue to user by id

    const [synagogue, setSynagogue] = useState(
        {
            name: "",
            location: {
                lat: "",
                lng: "",
                city: "",
                street: "",
                number: "",
            },
            nusach: "",
            minyans: [],
            user: {
                id: 0,
                fName: "",
                lName: "",
                password: "",
                isGabai: ""
            }
        });


    useEffect(() => {
        if (dataStore.user.synagogue != null) {
            setSynagogue(dataStore.user.synagogue);
        }
    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setSynagogue({ ...synagogue, [name]: value });
    }

    const handleFromChild = (key, value) => {
        setSynagogue({ ...synagogue, [key]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // todo! → server post call to update synagogue details
    }

    return (
        <>
            <TextField
                color="secondary"
                label="שם בית הכנסת"
                name="name"
                value={synagogue.name}
                onChange={handleChange}
            />
            <br />

            <Location handleLocation={handleFromChild} color={'secondary'} locationExists={synagogue.location} />

            <FormControl fullWidth>
                <InputLabel color="secondary" >נוסח</InputLabel>
                <Select
                    color="secondary"
                    label="נוסח"
                    name="nusach"
                    value={synagogue.nusach}
                    onChange={handleChange}

                >
                    <MenuItem value="1">אשכנז</MenuItem>
                    <MenuItem value="2">ספרד</MenuItem>
                    <MenuItem value="3">עדות מזרח</MenuItem>
                </Select>
            </FormControl>
            <br />

            <MinyanForm />

            {synagogue.minyans.length > 0? <MinyanListView minyanList={synagogue.minyans} />: null}

            <Button onClick={handleSubmit} color="secondary">שמור</Button>

        </>
    );
}))

export default SynagogueForm;