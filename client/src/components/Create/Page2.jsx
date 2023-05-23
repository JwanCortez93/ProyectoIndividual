import style from "../../Modules/Page2.module.css";

export const Page2 = ({ handleChange, nextPage, previousPage }) => {
  return (
    <div name="page2" className={style.container}>
      <label>Description: </label>
      <textarea
        className={style.description}
        type="text"
        name="description"
        onChange={handleChange}
      ></textarea>
      <div className={style.buttons}>
        <button className={style.button} type="button" onClick={previousPage}>
          Previous
        </button>
        <button className={style.button} type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
