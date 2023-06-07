import style from "../../Modules/Page1.module.css";
import { useState } from "react";

export const Page5 = ({
  check,
  platforms,
  stores,
  rating,
  form,
  handleChange,
  nextPage,
  previousPage,
}) => {
  const [error, setError] = useState("");

  const validatePage = (event) => {
    if (rating < 0 || rating > 5) {
      setError("El rating debe estar entre 0 y 5");
    } else {
      setError("");
      nextPage(event);
    }
  };

  if (!stores) {
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
    <div name="page3" className={style.container2}>
      <div className="ratingContainer">
        <label className={style.label}>What's the rating of your game? </label>
        <div>
          <input
            className={style.inputText2}
            value={rating}
            type="number"
            name="rating"
            onChange={handleChange}
          ></input>
        </div>
        {error && (
          <div>
            <h6
              style={{
                fontSize: "0.5em",
                width: "80%",
                margin: "0.3em",
                marginLeft: "10%",
                padding: "0.3em",
                borderRadius: "1em",
                backgroundColor: "#9049023b",
                color: "#ffae00f6",
              }}
            >
              {error}
            </h6>
          </div>
        )}
      </div>
      <div>
        <label className={style.label}>Where can we find it? </label>
        <div className={style.stores}>
          {stores.map((store) => {
            return (
              <div className={style.genre} key={store.id}>
                <label className={style.label}>{store.name}</label>
                <input
                  defaultChecked={check(store.name, "stores")}
                  type="checkbox"
                  name="stores"
                  value={store.name}
                  onChange={handleChange}
                ></input>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.buttons}>
        <div>
          <button className={style.button} type="button" onClick={previousPage}>
            Previous
          </button>
        </div>
        <div>
          <button className={style.button} type="button" onClick={validatePage}>
            Next
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
