import style from "./Modules/SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={style.div}>
      <input className={style.input} placeholder="Search Game"></input>
      <button className={style.button}>Search</button>
    </div>
  );
};
