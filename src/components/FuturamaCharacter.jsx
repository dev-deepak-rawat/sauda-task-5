import FuturamaCharacterDetails from "./FuturamaCharacterDetails";
import { useState } from "react";
import { getRandomInt } from "../utils";

export default function FuturamaCharacter({ character = {} }) {
  const [speech, setSpeech] = useState("");
  const { images = {}, sayings = [] } = character;
  const handleSay = () => {
    setSpeech(sayings[getRandomInt(0, sayings.length - 1)]);
    setTimeout(() => setSpeech(""), 3000);
  };

  return (
    <div className="card-item">
      <img
        className="card-item__img"
        src={images.main}
        alt="futurama character"
      />
      {Boolean(speech) && <div class="bubble bubble-bottom-left">{speech}</div>}
      <FuturamaCharacterDetails character={character} handleSay={handleSay} />
    </div>
  );
}
