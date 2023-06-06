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
        <label>Tags: </label>
        <input type="text" onChange={handleTags}></input>
        <button type="submit">Add</button>
        <div></div>
      </form>
      <label>ESRB Rating: </label>
      <select name="esrb_rating" onChange={handleChange}>
        <option>Everyone</option>
        <option>Everyone 10+</option>
        <option>Teen</option>
        <option>Mature</option>
        <option>Adults Only</option>
        <option>Rating Pending</option>
        <option>RP (Likely Mature)</option>
      </select>

      <label>Imágenes adicionales: </label>
      <input type="url" name="imageExtra" onChange={handleChange}></input>
      <input type="url" name="imageExtra" onChange={handleChange}></input>
      <input type="url" name="imageExtra" onChange={handleChange}></input>
      <input type="url" name="imageExtra" onChange={handleChange}></input>

      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <button type="submit">Create Videogame</button>
    </div>
  );
};
