import style from "../../Modules/Create.module.css";
import { Form } from "./Form";

export const Create = () => {
  return (
    <div className={style.container}>
      <h1>Esta es la Create page</h1>
      <Form />
    </div>
  );
};
