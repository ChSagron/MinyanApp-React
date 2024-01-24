import { MobileTimePicker } from "@mui/x-date-pickers";

const FormTime = () => {
    return (

        <>
            <MobileTimePicker
                label="שעה"
                slotProps={{
                    openPickerButton: { color: 'secondary' },
                    textField: {
                        variant: 'filled',
                        color: 'primary',
                    },
                }}
                className="date"
            />

        </>
    );
}

export default FormTime;