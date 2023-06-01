import style from "../../Modules/Favorites.module.css";
import { connect } from "react-redux";
import { CardsFavorite } from "./CardsFavorite";

const Favorites = ({ myFavorites }) => {
  return (
    <div className={style.div}>
      <CardsFavorite myFavorites={myFavorites} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
