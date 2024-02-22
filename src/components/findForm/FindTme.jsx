import { useEffect, useState } from "react";
import { MobileTimePicker } from "@mui/x-date-pickers";

const FindTime = ({ handleTime, color }) => {

    const [timeData, setTimeData] = useState(
        {
            hh: "",
            mm: "",
        });

    const handleChange = (event) => {
        var h = "";
        if (event.$H < 10) {
            h = `0${event.$H}`
        }
        else h = `${event.$H}`;


        var m = "";
        if (event.$m < 10) {
            m = `0${event.$m}`
        }
        else m = `${event.$m}`;

        setTimeData({ hh: h, mm: m });
    }

    useEffect(() => {
        handleTime("time", timeData);
    }, [timeData])


    return (

        <>
            <MobileTimePicker
                color={color}
                label="שעה"
                slotProps={{
                    openPickerButton: { color: 'secondary' },
                    textField: {
                        variant: 'outlined',
                        color: 'primary',
                    },
                }}
                onAccept={handleChange}
            />


        </>
    );
}

export default FindTime;