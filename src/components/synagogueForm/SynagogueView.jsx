import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "@mui/material";
import dataStore from "../../data/stores/dataStore"
import MinyanListView from "./MinyanListView";

const SynagogueView = (observer(() => {


    const handleClick = () => {
        navigate("/synagogueForm");
    }
    const navigate = useNavigate()


    return (
        <>
            {/* ♥ for gabai - details view */}

            {/* שם , כתובת , נוסח, מאומת */}
            <Card>
                <h1>בית כנסת {dataStore.user.synagogue.name}</h1><br />
                <p>רחוב {dataStore.user.synagogue.location.street} {dataStore.user.synagogue.location.number}, {dataStore.user.synagogue.location.city}</p>

                {/* ♥ can edit details */}
                <Button onClick={handleClick} color="secondary">ערוך</Button>
            </Card>

            {/* ♥ the minyans list
                ♥ in edit mode can add more minyans*/}
            <MinyanListView />

            <Button/>
        </>
    );
}))

export default SynagogueView;