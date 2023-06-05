import style from "../../Modules/Create.module.css";
import { Form } from "./Form";


export const Create = ({ genre, platforms, stores }) => {
  return (
    <div className={style.container}>
      <Form genre={genre} platforms={platforms} stores={stores} />
    </div>
  );
};
