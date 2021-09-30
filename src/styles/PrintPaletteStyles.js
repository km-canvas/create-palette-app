import screen from './mediaQueries';
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	navBtn: {
    padding: "0.2rem",
    margin: "0 0.5rem",
    "& svg": {
      display: "none",
      [screen.down('md')]: {
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
    [screen.down('md')]: {
      display: "none"
    }
  }
}