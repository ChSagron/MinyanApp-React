import { useEffect } from "react";
import { observer } from "mobx-react";
import { Card } from "@mui/material";
import MinyanView from "./MinyanView";
import dataStore from "../../data/stores/dataStore"

const MinyanListView = (observer(() => {

    return (
        <>
            <Card>
                {dataStore.user.synagogue.minyans.map((minyan, i) => (
                    <div key={minyan.id}>
                        <MinyanView minyanDetails={minyan} user={false} />
                    </div>
                ))}
            </Card>
        </>
    );
}))

export default MinyanListView;