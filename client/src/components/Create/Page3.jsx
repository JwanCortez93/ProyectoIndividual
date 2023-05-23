import style from "../../Modules/Page3.module.css";

export const Page3 = ({ handleChange, nextPage, previousPage }) => {
  return (
    <div name="page3" className={style.container}>
      <label>Release Date: </label>
      <input type="date" name="releaseDate" onChange={handleChange}></input>
      <label>Platforms: </label>
      <label>Platform 1</label>
      <input
        type="checkbox"
        name="platforms"
        value="Platform 1"
        onChange={handleChange}
      ></input>
      <label>Platform 2</label>
      <input
        type="checkbox"
        name="platforms"
        value="Platform 2"
        onChange={handleChange}
      ></input>
      <label>Platform 3</label>
      <input
        type="checkbox"
        name="platforms"
        value="Platform 3"
        onChange={handleChange}
      ></input>
      <label>Platform 4</label>
      <input
        type="checkbox"
        name="platforms"
        value="Platform 4"
        onChange={handleChange}
      ></input>
      <label>Platform 5</label>
      <input
        type="checkbox"
        name="platforms"
        value="Platform 5"
        onChange={handleChange}
      ></input>
      <label>Rating: </label>
      <input type="number" name="rating" onChange={handleChange}></input>
      <label>Stores: </label>
      <label>Store 1</label>
      <input
        type="checkbox"
        name="stores"
        value="Store 1"
        onChange={handleChange}
      ></input>
      <label>Store 2</label>
      <input
        type="checkbox"
        name="stores"
        value="Store 2"
        onChange={handleChange}
      ></input>
      <label>Store 3</label>
      <input
        type="checkbox"
        name="stores"
        value="Store 3"
        onChange={handleChange}
      ></input>
      <label>Store 4</label>
      <input
        type="checkbox"
        name="stores"
        value="Store 4"
        onChange={handleChange}
      ></input>
      <label>Store 5</label>
      <input
        type="checkbox"
        name="stores"
        value="Store 5"
        onChange={handleChange}
      ></input>
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <button type="button" onClick={nextPage}>
        Next
      </button>
    </div>
  );
};
