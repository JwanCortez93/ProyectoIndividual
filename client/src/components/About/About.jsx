import style from "../../Modules/About.module.css";

export const About = () => {
  return (
    <div className={style.container}>
      <div>
        <img
          className={style.img}
          src="/About image.png"
          alt="Juan Martín Cortez"
        />
      </div>
      <div className={style.info}>
        <h1>Juan Martín Cortez</h1>
        <h3>
          Juan Martín is born to Evelio Cortez and his wife Alejandra Caravetta,
          two very wealthy and charitable socialites from Gotham City. Juan was
          brought up in the wealthy splendor of Wayne Manor and leads a happy
          and privileged existence until roughly the age of eight.
        </h3>
        <h3>
          While returning home one night, his parents were killed by a
          small-time criminal named Joe Chill. After the incident, Juan swears
          an oath to rid the city of the evil that had taken his parents' lives.
          As he grows up, Juan engages in intense intellectual and physical
          training. He also travels abroad, training in various martial arts,
          fields of science, criminology and detective skills.
        </h3>
        <h3>
          After returning to Gotham, Juan realizes that these skills alone would
          not be enough. "Criminals are a superstitious and cowardly lot", he
          remarks, "so my disguise must be able to strike terror into their
          hearts. I must be a creature of the night, black, terrible..."
        </h3>
        <h3>
          As if responding to his desires, a bat suddenly flies through the
          window, inspiring Juan to assume the persona of Batman.
        </h3>
      </div>
    </div>
  );
};
