import { Cards } from "./Cards";
import { SubNav } from "./SubNav";
import { Menu } from "./Menu";
import { Poster } from "./Poster";
import { Extra } from "./Extra";
import style from "../../Modules/Home.module.css";

export const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.SubNav}>
        <SubNav />{" "}
      </div>
      <div className={style.Menu}>
        <Menu />{" "}
      </div>
      <div className={style.Poster}>
        <Poster />
      </div>
      <div className={style.Cards}>
        <Cards />{" "}
      </div>
      <div className={style.Extra}>
        <Extra />
      </div>
    </div>
  );
};
