import style from "../../Modules/Card.module.css";

export const Card = ({ name, image, genres }) => {
  const genresArray = [];

  if (genres.length > 0) {
    genres.forEach((genres) =>
      genresArray.push({ id: genres.id, name: genres.name })
    );
  }
  return (
    <div className={style.container}>
      <h1 className={style.name}>{name}</h1>
      <img className={style.img} src={image} alt={name} />
      <div className={style.genresContainer}>
        {genresArray.map((elem) => {
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
