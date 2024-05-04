import { createTheme } from "@mui/material/styles";
const NAV_BAR_HEIGHT='48px'
const BOARD_BAR_HEIGHT='58px'
const BOARD_CONENT_HEIGHT='58px'
const COLUMN_HEADER_HEIGHT='58px'
const COLUMN_FOOTER_HEIGHT='58px'
const trello = createTheme({ 
    appBarHeight :NAV_BAR_HEIGHT,
    navBarHeight:'3rem',
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  });
export default trello;
  