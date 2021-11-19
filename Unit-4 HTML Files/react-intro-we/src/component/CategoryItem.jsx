const CategoryItem = ({ url, title }) => {
  return (
    <>
      <img src={url} alt="title" />
      <div>{title}</div>
    </>
  );
};
export default CategoryItem;
