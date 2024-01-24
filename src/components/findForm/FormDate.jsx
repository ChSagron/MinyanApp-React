import { MobileDatePicker  } from '@mui/x-date-pickers';

const FormDate = () => {
  return ( 
    <>
   
      <MobileDatePicker 
      label="תאריך"
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
 
export default FormDate;