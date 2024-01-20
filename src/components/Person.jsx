const Person = ({ imageUrl, name, location, quote }) => {
  return (
    <div className="person">
      <img src={imageUrl} className="mb-3" alt={name} />
      <h1 className="mb-1">{name}</h1>
      <h4 className="mb-4">{location}</h4>
      <p className="mb-4">&ldquo;{quote}&rdquo;</p>
    </div>
  );
};
export default Person;
