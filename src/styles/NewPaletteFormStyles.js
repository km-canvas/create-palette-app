import navPrismGradient from "./navbg.svg";
import { DRAWER_WIDTH } from "../constants";
const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& Button": {
      fontWeight: "500"
    }
  },
  clearButton: {
    width: "calc(50% - 5px)"  
  },
  randomButton: {
    width: "calc(50% - 5px)",
    background: "linear-gradient(45deg, #ff000080, #ffa50080, #ffff0080, #00800080, #0000ff80, #4b008280, #ee82ee80, #ff000080)"
  }
});

export default styles;