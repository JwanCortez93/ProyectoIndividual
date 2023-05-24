import style from "../../Modules/Page3.module.css";

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
      <label>Release Date: </label>
      <input
        value={releaseDate}
        type="date"
        name="releaseDate"
        onChange={handleChange}
      ></input>

      <label>Platforms: </label>
      <div className="platformsContainer">
        {platforms.map((platform) => {
          return (
            <div>
              <label>{platform.name}</label>
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
        <label>Rating: </label>
        <input
          value={rating}
          type="number"
          name="rating"
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label>Stores: </label>
        <div>
          {stores.map((store) => {
            return (
              <div>
                <label>{store.name}</label>
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
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
