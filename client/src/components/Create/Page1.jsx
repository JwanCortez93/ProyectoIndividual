import style from "../../Modules/Page1.module.css";
import { useState } from "react";

export const Page1 = ({
  check,
  genres,
  formName,
  image,
  handleChange,
  nextPage,
  form,
}) => {
  const [error, setError] = useState("");

  const validatePage = (event) => {
    if (!form.name || !form.genres || !form.image) {
      setError("Los campos de esta página son obligatorios");
    } else {
      setError("");
      nextPage(event);
    }
  };

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
      <div></div>
      <div>
        <label className={style.label}>What's the name of your game? </label>
        <input
          value={formName}
          className={style.inputText}
          type="text"
          name="name"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label className={style.label}>
          Which genres would you choose for your game?
        </label>
        <div className={style.genres}>
          {genres.map((genre) => {
            return (
              <div className={style.genre} key={genre.id}>
                <label className={style.label}>{genre.name}</label>
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
      </div>

      <div>
        <label className={style.label}>
          Provide an image for the Card here:
        </label>
        <input
          value={image}
          className={style.inputText}
          type="url"
          name="image"
          onChange={handleChange}
        ></input>
      </div>

      {error && (
        <div>
          <h6
            style={{
              margin: "0",
              padding: "0.5em",
              borderRadius: "1em",
              backgroundColor: "#9049023b",
              color: "#ffae00f6",
            }}
          >
            {error}
          </h6>
        </div>
      )}
      <div className={style.buttons}>
        <button className={style.button} type="button" onClick={validatePage}>
          Next
        </button>
      </div>
    </div>
  );
};
