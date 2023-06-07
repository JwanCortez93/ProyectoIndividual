import style from "../../Modules/Card.module.css";

export const Card = ({ id, name, image, genres, rating }) => {
  const genresArray = [];

  if (genres.length > 0) {
    genres.forEach((genres) =>
      genresArray.push({ id: genres.id, name: genres.name })
    );
  }
  return (
    <div
      className={
        id.toString().includes("-") ? style.container2 : style.container
      }
    >
      <h3 className={style.rating}>⭐{rating}</h3>
      <h1 className={style.name}>{name}</h1>
      <img className={style.img} src={image} alt={name} />
      <div className={style.genresContainer}>
        {genresArray.slice(0, 3).map((elem) => {
          return (
            <h3 className={style.genres} key={elem.id}>
              {elem.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
};
