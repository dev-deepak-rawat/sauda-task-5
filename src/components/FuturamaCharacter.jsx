import FuturamaCharacterDetails from "./FuturamaCharacterDetails";

export default function FuturamaCharacter({ character = {} }) {
  const { images = {} } = character;
  return (
    <div className="card-item">
      <img
        className="card-item__img"
        src={images.main}
        alt="futurama character"
      />
      <FuturamaCharacterDetails character={character} />
    </div>
  );
}
