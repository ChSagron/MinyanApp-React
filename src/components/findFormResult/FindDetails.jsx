import { useState } from "react";
import { observer } from "mobx-react";
import { Card } from "@mui/material";
import dataStore from "../../data/stores/dataStore"

// todo! → convert details in put in component

const FindDetails = (observer(() => {

    const [details, setDetails] = useState(dataStore.findMinyan);
    // {
    //     prayer: "",
    //     location: {
    //         lat: "",
    //         lng: "",
    //         city: "",
    //         street: "",
    //         number: "",
    //     },
    //     radius: "",
    //     place: "",
    //     isFixed: "",
    //     date: {
    //         dd: "",
    //         mm: "",
    //         yyyy: "",
    //     },
    //     time: {
    //         hh: "",
    //         mm: "",
    //     },
    //     timeRange: "",
    //     synagogues: [],
    // });

    const [updateDetails, setUpdateDetails] = useState(
        {
            prayer: "",
            isFixed: "",
            time: "",
            timeRange: "",
            street: "",
            number: "",
            city: "",
            radius: ""
        }
    );

    const updateDetailsFunc = () => {

    };

    return (
        <>
            <Card>
                <p>מניין {updateDetails.prayer}, {updateDetails.isFixed} בשעה {updateDetails.time}, טווח {updateDetails.timeRange} דק' +-  <br />
                    אזור {updateDetails.street} {updateDetails.number} {updateDetails.city}, טווח {updateDetails.radius} ק"מ</p>
            </Card>
        </>
    );
}))

export default FindDetails;