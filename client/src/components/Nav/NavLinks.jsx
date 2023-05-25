import style from "../../Modules/NavLinks.module.css";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50em",
      }}
    >
      <div className={style.div}>
        <Link style={{ textDecoration: "none", color: "black" }} to="/about">
          <h3 className={style.divLink}>About</h3>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/favorites"
        >
          <h3 className={style.divLink}>My List</h3>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to="/create">
          <h3 className={style.divLink}>Create your own!</h3>
        </Link>
      </div>
    </div>
  );
};
