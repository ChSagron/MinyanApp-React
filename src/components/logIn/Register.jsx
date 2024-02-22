import { useState } from "react";
import { observer } from "mobx-react";
import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AddUser } from "../../data/servers/dataServer";
import dataStore from "../../data/stores/dataStore"

const Register = (observer(() => {

    const [user, setUser] = useState(
        {
            id: 0,
            fName: "",
            lName: "",
            nickname: "",
            phone: "",
            email: "",
            avatar: "",
            password: "",
            isGabai: false
        });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // todo! → check if there already nickname or email in data

        user.isGabai = JSON.parse(user.isGabai.toLowerCase());

        // server request
        await AddUser(user);

        // check if gabai → pass to synagogue details
        if (dataStore.user.isGabai === true) {
            if (dataStore.user.synagogue === null) {
                navigate("/synagogueForm");
            }
            else {
                navigate("/synagogueView");
            }
        }
        else {
            navigate("/findMinyan");
        }
    }

    const navigate = useNavigate()



    return (
        <>
            <ValidationTextField
                required
                label="שם פרטי"
                name="fName"
                value={user.fName}
                onChange={handleChange}
            />
            <br />
            <ValidationTextField
                required
                label="שם משפחה"
                name="lName"
                value={user.lName}
                onChange={handleChange}
            />
            <br />
            <ValidationTextField
                required
                label="שם משתמש"
                name="nickname"
                value={user.nickname}
                onChange={handleChange}
            />
            <br />
            <TextField
                label="טלפון נייד"
                name="phone"
                value={user.phone}
                onChange={handleChange}
            />
            <br />
            <ValidationTextField
                required
                label="דואל"
                name="email"
                value={user.email}
                onChange={handleChange}
            />
            <br />
            <ValidationTextField
                required
                label="סיסמא"
                name="password"
                value={user.password}
                onChange={handleChange}
            />
            <br />

            <StyledToggleButtonGroup
                aria-label="isGabai"
                value={user.isGabai}
                onChange={handleChange}

            >
                <ToggleButton name="isGabai" value="false">מתפלל</ToggleButton>
                <ToggleButton name="isGabai" value="true">גבאי (ידרש אימות)</ToggleButton>
            </StyledToggleButtonGroup>
            <br />

            <Button onClick={handleSubmit}>הרשם</Button>

        </>
    );
}))

export default Register;



const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: '#E0E3E7',
        borderWidth: 1,
    },
    '& input:invalid + fieldset': {
        borderColor: '#FF098E',
        borderWidth: 1,
    },
});


const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
    '& .MuiToggleButton-root:not(.Mui-selected)': {
        // backgroundColor: '#4CAF50', // צבע רקע כאשר הכפתור נבחר
        // color: '#FFFFFF', // צבע טקסט כאשר הכפתור נבחר
        borderColor: '#FF098E',
        borderWidth: 1,
    },
    '& .MuiToggleButton-root.Mui-selected': {
        // backgroundColor: '#4CAF50', // צבע רקע כאשר הכפתור נבחר
        // color: '#FFFFFF', // צבע טקסט כאשר הכפתור נבחר
        borderColor: '#E0E3E7',
        borderWidth: 1,
    },
    '& .MuiToggleButton-root.Mui-selected:hover': {
        // backgroundColor: '#45A049', // צבע רקע כאשר הכפתור נבחר והסמן מוחזק מעליו
    },
    '& .MuiToggleButton-root.Mui-selected:active': {
        // backgroundColor: '#3E8948', // צבע רקע כאשר הכפתור נבחר והמשתמש לוחץ עליו
    },
});

const StyledToggleButton = styled(ToggleButton)({
    // סגנונות כאשר הכפתור אינו נבחר
    '&.MuiToggleButton-root:not(.Mui-selected)': {
        // backgroundColor: '#E0E3E7', // צבע רקע
        // color: '#333333', // צבע טקסט
        // borderColor: '#FF098E',
        // borderWidth: 1,
        '&:hover': {
            // backgroundColor: '#D4D7DB', // צבע רקע בהעברת העכבר מעל הכפתור
        },
    },
    // סגנונות כאשר הכפתור נבחר
    '&.Mui-selected': {
        // backgroundColor: '#4CAF50', // צבע רקע כאשר הכפתור נבחר
        // color: '#FFFFFF', // צבע טקסט כאשר הכפתור נבחר
        '&:hover': {
            // backgroundColor: '#45A049', // צבע רקע בהעברת העכבר מעל הכפתור
        },
    },
    // סגנונות כאשר הכפתור מוחזק
    '&:active': {
        // backgroundColor: '#3E8948', // צבע רקע כאשר הכפתור מוחזק
    },
});