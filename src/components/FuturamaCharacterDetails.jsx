const futuramaCharacteristics = [
  "age",
  "gender",
  "homePlanet",
  "occupation",
  "species",
];
export default function FuturamaCharacterDetails({
  character = {},
  handleSay,
}) {
  const { name = {} } = character;
  const { first, middle, last } = name;

  return (
    <div className="card-item__details">
      <p className="card-item__name">{`${first} ${middle} ${last}`}</p>
      {futuramaCharacteristics.map((characteristic) =>
        character[characteristic] ? (
          <p key={characteristic}>
            <span className="card-item__characteristic">{`${characteristic}: `}</span>
            <span>{character[characteristic]}</span>
          </p>
        ) : (
          ""
        )
      )}
      <button className="card-item__button" onClick={handleSay}>
        Say Something
      </button>
    </div>
  );
}
