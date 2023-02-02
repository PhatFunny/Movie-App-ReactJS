import { createTheme } from '@mui/material/styles'
import { colors } from '@mui/material'

export const themeModes = {
  dark: 'dark',
  light: 'light'
}

const themeConfigs = {
  custome: ({ mode }) => {
    const customPallete = mode === themeModes.dark ? {
      primary: {
        main: '#ff0000',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#44336',
        contrastText: '#ffffff'
      },
      background: {
        default: '#000000',
        paper: '#131313'
      }
    } : {
      primary: {
        main: '#ff0000',
      },
      secondary: {
        main: '#44336',
      },
      background: {
        default: colors.grey['100'],
      }
    }

    return createTheme({
      palette: {
        mode,
        ...customPallete
      },
      components: {
        Muibutton: {
          defaultProps: { disableElevation: true }
        }
      }
    })
  }
}

export default themeConfigs;
