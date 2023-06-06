import style from "../../Modules/Page1.module.css";
import { useState } from "react";

export const Page4 = ({ handleChange, previousPage }) => {
  const [tags, setTags] = useState([]);
  const [tagsText, setTagsText] = useState("");

  const handleTags = (event) => {
    event.preventDefault();
    setTagsText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTags([...tags, tagsText]);
  };

  return (
    <div name="page4" className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={style.label}>Tags: </label>
          <input
            className={style.inputText3}
            type="text"
            onChange={handleTags}
          ></input>
        </div>
        <button className={style.button2} type="submit">
          Add
        </button>
        <div></div>
      </form>
      <label className={style.label}>ESRB Rating: </label>
      <select
        className={style.inputText}
        name="esrb_rating"
        onChange={handleChange}
      >
        <option>Everyone</option>
        <option>Everyone 10+</option>
        <option>Teen</option>
        <option>Mature</option>
        <option>Adults Only</option>
        <option>Rating Pending</option>
        <option>RP (Likely Mature)</option>
      </select>
      <label className={style.label}>
        If you want, you can provide additional images for your card:{" "}
      </label>{" "}
      <div className={style.stores}>
        <input
          className={style.inputText4}
          type="url"
          name="imageExtra"
          onChange={handleChange}
        ></input>
        <input
          className={style.inputText4}
          type="url"
          name="imageExtra"
          onChange={handleChange}
        ></input>
        <input
          className={style.inputText4}
          type="url"
          name="imageExtra"
          onChange={handleChange}
        ></input>
        <input
          className={style.inputText4}
          type="url"
          name="imageExtra"
          onChange={handleChange}
        ></input>
      </div>
      <div className={style.buttons}>
        <button className={style.button} type="button" onClick={previousPage}>
          Previous
        </button>
        <button className={style.button} type="submit">
          Create Videogame
        </button>
      </div>
    </div>
  );
};
