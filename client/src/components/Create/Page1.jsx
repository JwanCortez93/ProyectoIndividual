import style from "../../Modules/Page1.module.css";

export const Page1 = ({
  check,
  genres,
  formName,
  image,
  handleChange,
  nextPage,
}) => {
  if (!genres) {
    return (
      <div
        style={{
          height: "100%",
          cursor: "wait",
        }}
      ></div>
    );
  }
  return (
    <div name="page1" className={style.container}>
      <label>Name: </label>
      <input
        value={formName}
        className={style.inputText}
        type="text"
        name="name"
        onChange={handleChange}
      ></input>

      <label>Genres: </label>
      <div className={style.genres}>
        {genres.map((genre) => {
          return (
            <div>
              <label>{genre.name}</label>
              <input
                defaultChecked={check(genre.name, "genres")}
                type="checkbox"
                name="genres"
                value={genre.name}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
      </div>

      <label>Image: </label>
      <input
        value={image}
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
