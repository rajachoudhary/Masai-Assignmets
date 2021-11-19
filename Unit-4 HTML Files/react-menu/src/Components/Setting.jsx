import style from "./Css/Setting.module.css";
const Setting = ({ title }) => {
  return (
    <div>
      <button className={style.settingBtn}>{title}</button>
    </div>
  );
};
export default Setting;
