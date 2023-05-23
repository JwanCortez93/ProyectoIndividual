import style from "../../Modules/Page1.module.css";

export const Page1 = ({ handleChange, nextPage }) => {
  return (
    <div name="page1" className={style.container}>
      <label>Name: </label>
      <input
        className={style.inputText}
        type="text"
        name="name"
        onChange={handleChange}
      ></input>
      <label>Genres: </label>
      <div className={style.genres}>
        <div className={style.div1}>
          <label>Genre 1</label>
          <input
            type="checkbox"
            name="genres"
            value="Genre 1"
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.div2}>
          <label>Genre 2</label>
          <input
            type="checkbox"
            name="genres"
            value="Genre 2"
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.div3}>
          <label>Genre 3</label>
          <input
            type="checkbox"
            name="genres"
            value="Genre 3"
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.div4}>
          <label>Genre 4</label>
          <input
            type="checkbox"
            name="genres"
            value="Genre 4"
            onChange={handleChange}
          ></input>
        </div>
        <div className={style.div5}>
          <label>Genre 5</label>
          <input
            type="checkbox"
            name="genres"
            value="Genre 5"
            onChange={handleChange}
          ></input>
        </div>
      </div>
      <label>Image: </label>
      <input
        className={style.inputText}
        type="url"
        name="image"
        onChange={handleChange}
      ></input>
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
