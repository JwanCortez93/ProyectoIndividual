import style from "../../Modules/Page1.module.css";

export const Page3 = ({
  check,
  platforms,
  stores,
  rating,
  releaseDate,
  handleChange,
  nextPage,
  previousPage,
}) => {
  if (!platforms || !stores) {
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
    <div name="page3" className={style.container}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <label className={style.label}>Release Date: </label>
        <input
          className={style.inputText}
          value={releaseDate}
          type="date"
          name="releaseDate"
          onChange={handleChange}
        ></input>
      </div>

      <label className={style.label}>Platforms: </label>
      <div className={style.genres}>
        {platforms.map((platform) => {
          return (
            <div className={style.genre} key={platform.id}>
              <label className={style.label}>{platform.name}</label>
              <input
                defaultChecked={check(platform.name, "platforms")}
                type="checkbox"
                name="platforms"
                value={platform.name}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
      </div>
      <div className="ratingContainer">
        <label className={style.label}>Rating: </label>
        <input
          value={rating}
          type="number"
          name="rating"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label className={style.label}>Stores: </label>
        <div className={style.genres}>
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
        <button type="button" onClick={previousPage}>
          Previous
        </button>
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
      <div></div>
    </div>
  );
};
