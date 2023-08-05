import ListWrap from '../UI/ListWrap';
import Concept from './Concept';

const ConceptsContents = (props) => {
  return (
    <ListWrap>
      <Concept content={props.concept[0]}></Concept>
      <Concept content={props.concept[1]}></Concept>
      <Concept content={props.concept[2]}></Concept>
    </ListWrap>
  );
};

export default ConceptsContents;
