import { Cards } from "./Cards";
import { SubNav } from "./SubNav";
import Menu from "./Menu";
import { Poster } from "./Poster";
import { Extra } from "./Extra";
import style from "../../Modules/Home.module.css";
import { connect } from "react-redux";
import { addAllFavs } from "../../Redux/actions";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ addAllFavs, videogames, genres, platforms, stores }) => {
  useEffect(async () => {
    const favs = await axios
      .get("http://localhost:3001/favorites")
      .then(({ data }) => data);
    addAllFavs(favs);
  }, []);

  const [page, setPage] = useState(0);

  const handlePage = (event) => {
    switch (event.target.name) {
      case "Next":
        setPage(page + 1);
        break;
      case "Previous":
        setPage(page - 1);
        break;
      case "First":
        setPage(0);
        break;
      case "Last":
        setPage(6);
        break;
    }
  };

  return (
    <div>
      <div className={style.background}></div>
      <div className={style.container}>
        <div className={style.SubNav}>
          <SubNav />
        </div>
        <div className={style.Poster}>
          <Poster />
        </div>
        <div className={style.Menu}>
          <Menu
            videogames={videogames}
            genres={genres}
            platforms={platforms}
            stores={stores}
            page={page}
            handlePage={handlePage}
          />
        </div>
        <div className={style.Cards}>
          <Cards videogames={videogames.slice(page * 15, (page + 1) * 15)} />
        </div>
        <div className={style.Extra}>
          <Extra />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAllFavs: (favs) => {
      dispatch(addAllFavs(favs));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
