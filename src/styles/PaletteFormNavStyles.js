import { DRAWER_WIDTH } from "../constants";
import screen from './mediaQueries';
const drawerWidth = DRAWER_WIDTH;
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
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    "& a": {
      textDecoration: "none"
    },
    [screen.down('md')]: {
      marginRight: "0.5rem",
    }
  },
  navBtn: {
    width: "120px",
    padding: "0.2rem",
    margin: "0 0.5rem",
    [screen.down('md')]: {
      margin: "0 0.2rem",
    }
  }
})
export default styles;