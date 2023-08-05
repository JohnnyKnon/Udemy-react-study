import './ListWrap.css';

const ListWrap = (props) => {
  return <ul id="concepts">{props.children}</ul>;
};

export default ListWrap;
