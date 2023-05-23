import style from "../../Modules/DetailCard.module.css";
import { Menu } from "../Home/Menu";
export const DetailCard = ({
  id,
  name,
  image,
  platforms,
  description,
  released,
  rating,
  genres,
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

  const genresArray = [];
  genres.forEach((genre) =>
    genresArray.push({ id: genre.id, name: genre.name })
  );
  const platformsArray = [];
  platforms.forEach((platform) =>
    platformsArray.push({
      id: platform.platform.id,
      name: platform.platform.name,
    })
  );

  const removeEspañol = (description) => {
    var index = description.indexOf("Español");
    if (index !== -1) {
      description = description.substring(0, index);
    }
    return description;
  };

  return (
    <div style={{ height: "100%" }}>
      <Menu />
      <div className={style.DetailCard}>
        <img className={style.image} src={image} alt={name} />
        <h1 className={style.name}>{name}</h1>
        <div className={style.description}>
          <p>{removeEspañol(description)}</p>
        </div>
        <div className={style.genres}>
          {genresArray.map((elem) => {
            return (
              <h3 className={style.genre} key={elem.id}>
                {elem.name}
              </h3>
            );
          })}
        </div>
        <h3 className={style.releaseDate}>Release Date: {released}</h3>
        <div className={style.platforms}>
          {platformsArray.map((elem) => {
            return (
              <h3 className={style.platform} key={elem.id}>
                {elem.name}
              </h3>
            );
          })}
        </div>
        <h4 className={style.id}>#{id}</h4>
      </div>
      <h2 clasmsName={style.rating}>{rating}</h2>
    </div>
  );
};
