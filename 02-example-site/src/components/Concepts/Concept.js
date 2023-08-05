import './Concept.css';

const Concept = (props) => {
  const imageSrc = props.content.image;
  const title = props.content.title;
  const description = props.content.description;
  return (
    <li className="concept">
      <img src={imageSrc} alt={title} />
      <h2>TODO: {title}</h2>
      <p>TODO: {description}</p>
    </li>
  );
};

export default Concept;
