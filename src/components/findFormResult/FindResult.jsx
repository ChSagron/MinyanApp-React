import { Outlet } from "react-router-dom";
import FindDetails from "./FindDetails";

const FindResult = () => {
    return (
        <>
            <div>תוצאת החיפוש</div>
            <FindDetails />

            <Outlet />
        </>
    );
}

export default FindResult;