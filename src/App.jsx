import { RouterProvider } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import appTheme from './components/appComponent/appTheme'
import MinyanBar from './components/appComponent/MinyanBar'
import Router from './components/appComponent/Router'
import './App.css'
import { observer } from 'mobx-react'


const App = (observer(() => {

  return (

    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <MinyanBar />

          <div id="mainDiv">
            <RouterProvider router={Router} />
          </div>

        </ThemeProvider>
      </LocalizationProvider>
    </>
  )
}))

export default App
