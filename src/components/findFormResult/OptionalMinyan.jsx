
import { observer } from "mobx-react";
import minyansStore from "../../data/stores/minyansStore";

const OptionalMinyan = (observer(() => {

    return (
        <>
            <div> מניינים קיימים בסביבה: </div>
        </>
    );
}))

export default OptionalMinyan;