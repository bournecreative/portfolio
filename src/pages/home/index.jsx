import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  ["page_full-width"]: {
    width: "100%;",
    display: "grid",
    gridTemplateColumns: "100fr",
  },
});

export const Home = () => {
  const styles = useStyles();
  return <div className={styles.myButton}>Home Page</div>;
};
