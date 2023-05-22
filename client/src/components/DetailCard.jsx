import style from "./Modules/DetailCard.module.css";
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
  console.log(genres);
  if (!platforms) {
    // Handle loading state or return a placeholder
    return <></>;
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
  return (
    <div className={style.div}>
      <h1>Este es la DetailCard</h1>
      <h1>{name}</h1>
      <h2>{rating}</h2>
      <img style={{ width: "60em" }} src={image} alt={name} />
      <h4 dangerouslySetInnerHTML={{ __html: description }}></h4>
      <div>
        {genresArray.map((elem) => {
          return <h3 key={elem.id}>{elem.name}</h3>;
        })}
      </div>
      <h3>{released}</h3>
      <div>
        {platformsArray.map((elem) => {
          return <h3 key={elem.id}>{elem.name}</h3>;
        })}
      </div>
      <h4>{id}</h4>
    </div>
  );
};
