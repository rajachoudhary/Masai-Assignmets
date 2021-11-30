import styles from "./Css/Download.module.css";
const Download = ({title}) => {
  return (
    <div>
      <button className={styles.downloadBtn}>{title}</button>
    </div>
  );
};
export default Download;
