import blueGrey from '@material-ui/core/colors/blueGrey';
import navPrismGradient from "./navbg.svg";
import screen from "./mediaQueries";
import { DRAWER_WIDTH, SM_DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;
const mobileWidth = SM_DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    [screen.down("sm")]: {
      width: mobileWidth,
    }
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#CCC",
		backgroundImage: `url(${navPrismGradient})`,
    // background by SVGBackgrounds.com
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
    [screen.down("sm")]: {
      width: mobileWidth,
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    [screen.down("sm")]: {
      marginLeft: -mobileWidth,
    }
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerContainer: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  paletteButton: {
    width: "100%",
    marginBottom: "1rem",
    [screen.down("sm")]: {
      marginBottom: 0,    }
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& Button": {
      fontWeight: "500",
      width: "calc(50% - 5px)",
      [screen.down("sm")]: {
        width: "100%",
        marginTop: "1rem"
      }
    },
    [screen.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-around",
    }
  },
  clearButton: {
    backgroundColor: blueGrey[50],
    '&:hover': {
      backgroundColor: blueGrey[100],
    }
  },
  randomButton: {
    background: "linear-gradient(45deg, #ff000080, #ffa50080, #ffff0080, #00800080, #0000ff80, #4b008280, #ee82ee80, #ff000080)"
  }
});

export default styles;