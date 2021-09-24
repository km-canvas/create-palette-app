import navPrismGradient from "./navbg.svg";
import screen from "./mediaQueries";
import { DRAWER_WIDTH, SM_DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;
const mobileWidth = SM_DRAWER_WIDTH;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px",
    backgroundColor: "#FFF",
		backgroundImage: `url(${navPrismGradient})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
    // background by SVGBackgrounds.com
    [screen.down("xs")]: {
      "& h6, button": {
        display: props => (props.open) ? "none" : "inline-flex"
      }
    },
    [screen.down("xx")]: {
      "& h6": {
        display: "none !important"
      }
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [screen.down("sm")]: {
      width: `calc(100% - ${mobileWidth}px)`,
      marginLeft: mobileWidth,
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navBtnGroup: {
    marginRight: "1rem",
    display: "inline-flex",
    flexFlow: "row wrap",
    justifyContent: "flex-end",
    alignItems: "center",
    "& a": {
      textDecoration: "none"
    },
    [screen.down('md')]: {
      marginRight: "0.5rem",
    },
  },
  navBtn: {
    padding: "0.2rem",
    margin: "0 0.5rem",
    "& svg": {
      display: "none",
      [screen.down('sm')]: {
        display: "inline-block"
      },
    },
    [screen.down('md')]: {
      padding: "0.1rem",
      margin: "0 0.2rem",
    },
  },
  navBtnTxt: {
    padding: "0.2rem",
    [screen.down('sm')]: {
      display: "none"
    }
  }
})
export default styles;