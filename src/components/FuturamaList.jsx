import { useEffect, useState } from "react";
import FuturamaCharacter from "./FuturamaCharacter";
import "./FuturamaList.css";

export default function FuturamaList() {
  const [futuramaCharacters, setFuturamaCharacters] = useState([]);
  const [networkErr, setNetworkErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sampleapis.com/futurama/characters")
      .then((res) => res.json())
      .then((futuramas) => setFuturamaCharacters(futuramas))
      .catch((err) => setNetworkErr(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="loader">loading...</div>;
  if (networkErr) return <div className="error">{networkErr}</div>;

  return (
    <>
      <div className="card-container">
        {futuramaCharacters.map((character = {}) => (
          <FuturamaCharacter character={character} key={character.id} />
        ))}
      </div>
    </>
  );
}
