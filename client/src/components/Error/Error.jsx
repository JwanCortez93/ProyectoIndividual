import style from "../../Modules/Error.module.css";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className={style.container}>
      <div className={style.background}>
        <img
          className={style.img}
          src="/Error Wallpaper.png"
          alt="Error page"
        />
      </div>
      <div className={style.foreground}>
        <h1
          style={{
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          "I think you're lost, hermano"
        </h1>
        <div className={style.message}>
          <h1 style={{ margin: "0", fontSize: "10em" }}>404</h1>
          <h3 style={{ margin: "0", fontSize: "4em" }}>Page not found</h3>
          <Link to="/home">
            <button className={style.button}>Main page</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};
