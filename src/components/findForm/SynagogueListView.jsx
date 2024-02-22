import { observer } from "mobx-react";
import { Card } from "@mui/material";
import SynagogueDetails from "./SynagogueDetails";
import synagogueStore from "../../data/stores/synagogueStore";


// todo! → merge components of list (??? how to get child component asprop)

const SynagogueListView = (observer(() => {

    // ♥ synagogue details view
    // ♥ the list order by distance (from server)

    return (
        <>
            <Card>
                {synagogueStore.synagogueList.map((item, i) => (
                    <div key={item.id}>
                        <SynagogueDetails s={item} />
                    </div>
                ))}
            </Card>
        </>
    );
}))

export default SynagogueListView;