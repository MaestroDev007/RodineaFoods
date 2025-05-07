import { createTheme } from "@mui/material/styles";





const theme = createTheme({
    typography: {
        fontFamily: "Poppins, sans-serif",
    }, 
    palette: {
        primary: {
            main: "#2E6f40",
            dark: "#2B3E34",
        }
    },

      breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 998,
      xl: 1200,
    },
  },
})

export default theme;