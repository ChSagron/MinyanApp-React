import { useEffect, useState } from 'react';
import { MobileDatePicker } from '@mui/x-date-pickers';


const FindDate = ({ handleDate, color }) => {

  const [d, setD] = useState(
    {
      dd: "",
      mm: "",
      yyyy: "",
    });

  const handleChange = (event) => {
    var d = "";
    if (event.$D < 10) {
      d = `0${event.$D}`
    }
    else d = `${event.$D}`;

    var m = "";
    if (event.$M + 1 < 10) {
      m = `0${event.$M + 1}`
    }
    else m = `${event.$M + 1}`;

    setD({ dd: d, mm: m, yyyy: event.$y });
  }


  useEffect(() => {
    handleDate("date", d);
  }, [d])


  return (
    <>
      <MobileDatePicker
        color={color}
        label="תאריך"
        slotProps={{
          openPickerButton: { color: 'secondary' },
          textField: {
            variant: 'outlined',
            color: 'primary',
          },
        }}
        onAccept={handleChange}
      />
      <br />
    </>
  );
}

export default FindDate;