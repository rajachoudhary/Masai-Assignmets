const helpBtn = {
  background: "blue",
  padding: "0.5rem 1rem",
  borderRadius: "30px",
  fontSize: "25px",
  border: "none"
};

const Help = ({ title }) => {
  return (
    <div>
      <button style={helpBtn}>{title}</button>
    </div>
  );
};
export default Help;
