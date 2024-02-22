import { useEffect, useState } from "react";
import { InputAdornment, TextField, ToggleButton, ToggleButtonGroup, toggleButtonGroupClasses } from "@mui/material";
import styled from "@emotion/styled";

const FindRadius = ({ handleRadius }) => {

    const [distance, setDistance] = useState();

    const handleChangeDistance = (event) => {
        setDistance(event.target.value);
    }

    const [unit, setUnit] = useState();

    const handleUnit = (event) => {
        if (distance != null) {
            setUnit(event.target.value);
        }
    }

    useEffect(() => {
        if (unit != null) {
            if (unit === "minutes") {
                handleRadius("radius", distance / 11);
            }
            else {
                handleRadius("radius", distance);
            }
        }
    }, [unit, distance])


    const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
        [`& .${toggleButtonGroupClasses.grouped}`]: {
            margin: theme.spacing(0.5),
            border: 0,
            borderRadius: theme.shape.borderRadius,
            [`&.${toggleButtonGroupClasses.disabled}`]: {
                border: 0,
            },
        },
        [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
        {
            marginLeft: -1,
            borderLeft: '1px solid transparent',
        },
    }));


    return (
        <>

            <TextField
                label="מרחק"
                name="distance"
                value={distance}
                onChange={handleChangeDistance}
                InputProps={{
                    startAdornment: <InputAdornment position="start">מרחק אפשרי</InputAdornment>,
                    endAdornment: <InputAdornment position="end">
                        <StyledToggleButtonGroup
                            value={unit}
                            exclusive
                            onChange={handleUnit}
                            aria-label="radius"
                            color="primary"
                            size='small'
                        >
                            <ToggleButton value="minutes">דק' הליכה</ToggleButton>
                            <ToggleButton value="km">קילומטר</ToggleButton>
                        </StyledToggleButtonGroup>
                    </InputAdornment>,
                }}
            />

        </>
    );
}

export default FindRadius;