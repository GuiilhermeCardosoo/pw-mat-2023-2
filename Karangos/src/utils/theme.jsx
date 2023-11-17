import { createTheme } from '@mui/material/styles'
import { yellow, pink } from '@mui/material/colors'

const theme = createTheme({
    pallete: {
        mode: 'dark', // o padrão é 'light'
        primary: {
            main: yellow[600],
        },
        secondary: {
            main: pink[500]
        }

    }
})

export default theme