  // const newThem = createTheme({
  //   mode: 'dark',
  //   palette: {
  //     primary: {
  //       main: '#5302FF',
  //     },
  //     secondary: {
  //       main: '#DCFF02',
  //     }
  //   },
  //   text: {
  //     primary: '#FFFFFF',
  //     secondary: '#D9D9D9',
  //   },
  // },
  //   {
  //     mode: 'light',
  //     palette: {
  //       primary: {
  //         main: '#5302FF',
  //       },
  //       secondary: {
  //         main: '#DCFF02',
  //       }
  //     },
  //       text: {
  //       primary: '#1C1C1C',
  //       secondary: '#3D3D3D',
  //     },
  //   });


    // const newThem = useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode: prefersDarkMode ? 'dark' : 'light',
  //         // mode: 'light',

  //       },
  //     }),
  //   [prefersDarkMode],
  // );


//   const newTheme = (modeColor) => ({
//     palette: {
//       mode,
//       ...(modeColor === 'light'
//         ? {
//             primary: {
//               main: '#5302FF',
//             },
//             secondary: {
//               main: '#DCFF02',
//             },
//             text: {
//               primary: '#1C1C1C',
//               secondary: '#3D3D3D',
//             },
//           }
//         : {
//             primary: {
//               main: '#5302FF',
//             },
//             secondary: {
//               main: '#DCFF02',
//             },
//             text: {
//               primary: '#FFFFFF',
//               secondary: '#D9D9D9',
//             },
//           }),
//     },
//   });

// const mode = useMediaQuery('(prefers-color-scheme: dark)');

  // const newTheme = (mode) => ({
  //   palette: {
  //     mode,
  //     ...(mode === 'light'
  //       ? {
  //           primary: {
  //             main: '#5302FF',
  //           },
  //           secondary: {
  //             main: '#DCFF02',
  //           },
  //           text: {
  //             primary: '#1C1C1C',
  //             secondary: '#3D3D3D',
  //           },
  //         }
  //       : {
  //           primary: {
  //             main: '#5302FF',
  //           },
  //           secondary: {
  //             main: '#DCFF02',
  //           },
  //           text: {
  //             primary: '#FFFFFF',
  //             secondary: '#D9D9D9',
  //           },
  //         }),
  //   },
  // });

//-----------------------------------------------------------

    // const [mode, setMode] = useState < PaletteMode > ('light');

  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === 'light' ? 'dark' : 'light',
  //       );
  //     },
  //   }),
  //   [],
  // );

  // // Update the theme only if the mode changes
  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // const getDesignTokens = (mode: PaletteMode) => ({
  //   palette: {
  //     mode,
  //     ...(mode === 'light'
  //       ? {
  //           // palette values for light mode
  //           primary: '#5302FF',
  //           secondary: '#DCFF02',
  //           text: {
  //             primary: '#1C1C1C',
  //             // secondary: grey[800],
  //           },
  //         }
  //       : {
  //           // palette values for dark mode
  //           primary: '#5302FF',
  //           // divider: deepOrange[700],
  //           // background: {
  //           //   default: deepOrange[900],
  //           //   paper: deepOrange[900],
  //           // },
  //           text: {
  //             primary: '#FFFFFF',
  //             // secondary: grey[500],
  //           },
  //         }),
  //   },
  // });