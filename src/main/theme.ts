import { createMuiTheme, Theme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f9db5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }, 
    MuiCardActions: {
      root: {
        // [createMuiTheme({}).breakpoints.down('md')]: {
          display: 'block'
        // }
      }
    }
  }
})

export default theme as Theme;