import style from "../../Modules/DetailCard.module.css";
import Menu from "../Home/Menu";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";

const DetailCard = ({
  myFavorites,
  addFav,
  removeFav,
  id,
  name,
  image,
  platforms,
  description,
  released,
  rating,
  genres,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (name && myFavorites) {
      myFavorites.forEach((fav) => {
        if (fav.name === name) {
          setIsFav(true);
        }
      });
    }
  }, [name, myFavorites]);

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

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(name);
    } else if (!isFav) {
      setIsFav(true);
      addFav(name);
    }
  };

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
      <h2 className={style.rating}>⭐{rating}</h2>
      <div className={style.DetailCard}>
        <img className={style.image} src={image} alt={name} />
        <button onClick={handleFavorite} className={style.button}>
          {isFav ? "Remove from my list" : "Add to my List"}
        </button>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (name) => {
      dispatch(addFav(name));
    },
    removeFav: (name) => {
      dispatch(removeFav(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCard);
