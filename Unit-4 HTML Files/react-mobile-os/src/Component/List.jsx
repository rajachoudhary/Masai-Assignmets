import Header from "./Header";
import ListItem from "./ListItem";
const List = () => {
  return (
    <>
      <Header title={"Mobile OIperating System"} />
      <ListItem title={"Android"} />
      <ListItem title={"Blackberry"} />
      <ListItem title={"iPhone"} />
      <ListItem title={"Windows Phone"} />
      <Header title={"Mobile Manufacturers"} />
      <ListItem title={"Samsung"} />
      <ListItem title={"HTC"} />
      <ListItem title={"Micromex"} />
      <ListItem title={"Apple"} />
    </>
  );
};
export default List;
