import { useState } from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Switch } from '@mui/material';
import FormDate from './components/FormDate';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FindForm from './components/FindForm';



function App() {

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    direction: 'rtl',
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#5302FF',
      },
      secondary: {
        main: '#DCFF02',

      },
    },
  });


  return (

    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {/* <MinyanAppBar/> */}
          <div className="hello"> hello App</div>
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          <FindForm/>
        </ThemeProvider>
      </LocalizationProvider>


    </>
  )
}

export default App
