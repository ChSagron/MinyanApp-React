import { Button } from "@mui/material";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";

const NoOptionalMinyan = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        // ♥ go to brother path :)
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace("/options", "/map");
        navigate(newPath);
    }


    return (
        <>
            <div> אין כרגע מניינים באזור בטווח הזמן הרצוי, נעדכן מיד כשיתאסף </div>
            <Button onClick={handleClick} >הצגת מחפשי מניין בסביבה</Button>
        </>
    );
}

export default NoOptionalMinyan;