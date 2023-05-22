import style from "./Modules/Card.module.css";

export const Card = ({ name, image, genres }) => {
  const genresArray = [];
  genres.forEach((genre) =>
    genresArray.push({ id: genre.id, name: genre.name })
  );
  return (
    <div className={style.container}>
      <h1 className={style.name}>{name}</h1>
      <img className={style.img} src={image} alt={name} />
      <div className={style.genresContainer}>
        {genresArray.map((elem) => {
          return (
            <h3 className={style.genre} key={elem.id}>
              {elem.name}
            </h3>
          );
        })}
      </div>
    </div>
  );
};
