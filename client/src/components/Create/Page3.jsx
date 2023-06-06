import style from "../../Modules/Page1.module.css";

export const Page3 = ({
  check,
  platforms,
  stores,

  releaseDate,
  handleChange,
  nextPage,
  previousPage,
}) => {
  if (!platforms) {
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label className={style.label}>When did your game come out? </label>
        </div>
        <div>
          <input
            className={style.inputText}
            value={releaseDate}
            type="date"
            name="releaseDate"
            onChange={handleChange}
          ></input>
        </div>
      </div>

      <label className={style.label}>Where can we play your game? </label>
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

      <div className={style.buttons}>
        <div>
          <button className={style.button} type="button" onClick={previousPage}>
            Previous
          </button>
        </div>
        <div>
          <button className={style.button} type="button" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
