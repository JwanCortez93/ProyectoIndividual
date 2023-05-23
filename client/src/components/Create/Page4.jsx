import style from "../../Modules/Page4.module.css";

export const Page4 = ({ handleChange, previousPage }) => {
  return (
    <div name="page4" className={style.container}>
      <label>Tags: </label>
      <input type="text" onChange={handleChange}></input>
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
