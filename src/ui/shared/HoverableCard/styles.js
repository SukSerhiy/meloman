import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "20px 30px",
    position: "relative",
    borderRadius: 10,
    backgroundColor: "var(--clr-bg-card)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    transition: 'all .4s ease',
    gap: 10,
    "&:hover": {
      backgroundColor: "#0c488e",
      "& $avatar": {
        transform: 'scale(1.1)',
      },
    },
  },
  imgContainer: {
    borderRadius: 10,
    overflow: "hidden",
  },
  avatar: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
    objectFit: "cover",
    transition: 'transform .4s ease',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "lightgrey",
    textAlign: "center",
  },
});

export default useStyles;
