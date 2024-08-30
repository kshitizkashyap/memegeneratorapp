import React from "react";
import memesData from "../memesData";

function MainContent() {
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
  });

  const [memeImage, setMemeImage] = React.useState(0);

  function handleChange(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function generateRandomMeme() {
    const arrayLength = memesData.data.memes.length;
    const randIndex = Math.floor(Math.random() * arrayLength);
    setMemeImage(randIndex);
    console.log(randIndex);
  }

  return (
    <main>
      <div className="form">
        <input
          id="top-text"
          type="text"
          placeholder="Top text"
          name="topText"
          onChange={handleChange}
          value={formData.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          name="bottomText"
          onChange={handleChange}
          value={formData.bottomText}
        />
      </div>
      <div className="meme--container">
        <button className="button" onClick={generateRandomMeme}>
          Generate random meme
        </button>
        <div className="meme--image">
          <img
            src={memesData.data.memes[memeImage].url}
            alt={memesData.data.memes[memeImage].name}
          />
          <h2 className="meme--text top">{formData.topText}</h2>
          <h2 className="meme--text bottom">{formData.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
