import './Header.css';

const Header = (props) => {
  const headImageSrc = props.headImage;
  return (
    <header>
      <img src={headImageSrc} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
