import style from "../../Modules/NavLinks.module.css";
import { Link } from "react-router-dom";

export const NavLinks = () => {
  return (
    <div className={style.div}>
      
      <Link style={{ textDecoration: "none", color: "black" }} to="/about">
        <h3 className={style.divLink}>About</h3>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/favorites">
        <h3 className={style.divLink}>MyList</h3>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to="/create">
        <h3 className={style.divLink}>Create your own game!</h3>
      </Link>
    </div>
  );
};
