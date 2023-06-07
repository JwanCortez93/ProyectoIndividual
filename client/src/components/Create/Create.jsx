import style from "../../Modules/Create.module.css";
import Form from "./Form";

export const Create = ({ genres, platforms, stores }) => {
  return (
    <div className={style.container}>
      <div></div>
      <Form
        className={style.form}
        genres={genres}
        platforms={platforms}
        stores={stores}
      />
      <div className={style.background}>
        <img
          className={style.img}
          src="/CreationBackground.png"
          alt="Create page"
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
