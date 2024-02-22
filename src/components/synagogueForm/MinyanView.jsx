import { Button, Card, Chip, Divider, switchClasses } from "@mui/material";
import { convertPrayer } from "../appComponent/updateDetails"

const MinyanView = ({ minyanDetails, user }) => {

    var prayer = convertPrayer(minyanDetails.prayer);

    if (minyanDetails.dateTime != null) {
        var partsDate = minyanDetails.dateTime.substring(0, 10).split("-");
        var formattedDate = partsDate[2] + "-" + partsDate[1] + "-" + partsDate[0];
        var time = minyanDetails.dateTime.substring(11, 16);
    }

    const handleClick = () => {
        // todo! → open popup, with parameters to edit 
    }

    return (
        <>
            <Card className="flexItem">
                {minyanDetails.isFixed === true ? <Chip label="קבוע" /> : <Chip label="חד פעמי" />}
                <Divider orientation="vertical" variant="middle" flexItem />
                <div><p>תפילת {prayer}</p>
                    {user === true && <p>בית כנסת {minyanDetails.synagogue.name}, רחוב {minyanDetails.synagogue.location.street} {minyanDetails.synagogue.location.number}, {minyanDetails.synagogue.location.city}</p>}
                    {minyanDetails.isFixed === false && <p>בתאריך {formattedDate}</p>}
                <p>בשעה {time}</p></div>
                <Button fullWidth={false} onClick={handleClick} color="secondary">ערוך</Button>
            </Card>
        </>
    );
}

export default MinyanView;