import App from "../src/App";

const Header = (props) => {
  return (
    <>
      <h1>{props.gameTitle}</h1>
      <h2>{props.subHeading}</h2>
    </>
  );
};

export default Header;
