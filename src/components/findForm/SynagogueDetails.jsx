import { useEffect, useState } from "react";
import { Card, Checkbox, Chip } from "@mui/material";

const SynagogueDetails = ({ s }) => {

    const [classN, SetClassN] = useState("");

    // todo! → fixed server function, to return right distance

    // ♥ color by distance 
    useEffect(() => {
        if (s.location.distance < 0.1) {
            SetClassN("small");
        }
        else if (s.distance < 0.5) {
            SetClassN("medium");
        }
        else {
            SetClassN("large");
        };
    }, [])


    return (
        <>
            {/* מרחק, שם , כתובת , נוסח, מאומת - ורצוי */}
            <Card className="flexItem">
                <div>

                    <Checkbox />
                </div>
                <div>

                    <p className={classN}>בי"כ {s.name}</p>
                </div>
                <div>
                    <Chip label={s.distance} variant="outlined" />

                </div>
            </Card>
        </>
    );
}

export default SynagogueDetails;