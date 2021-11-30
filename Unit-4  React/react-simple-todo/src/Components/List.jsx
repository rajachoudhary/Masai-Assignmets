import style from "../CSS/Todo.module.css"
const List = (props) => {
  return (
    <>
      <li className={style.list}>{props.title}</li>
    </>
  );
};
export default List;
