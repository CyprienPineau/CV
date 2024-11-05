import { FormationListProps, FormationProps } from "./FormationList.types.js";
import "./FormationList.css";
import { DATA_FORMATIONS } from "_data/data_formation.ts";

const Formation = ({ formation, isSideMenuShown }: FormationProps) => {
  return (
    <div className="formation">
      <div className="formation-header">
        <p className="formation-date">{formation.date}</p>
      </div>
      <div
        className={
          isSideMenuShown
            ? "formation-corps-img sidemenuopen"
            : "formation-corps-img"
        }
        style={{ backgroundImage: `url(${formation.imgFond})` }}
      >
        {/* ajout d'une div pour gérer la transparence */}
        <div className="formation-corps-img-transparency">
          <img
            className="formation-corps-img-logo"
            src={formation.imgRef}
            alt="Logo Esigelec"
          />
        </div>
      </div>
      <div className="formation-corps">
        <h4>
          <span
            className={
              isSideMenuShown ? "formation-name sidemenuopen" : "formation-name"
            }
          >
            {formation.name}
          </span>
          <br />
          <a
            href={formation.locationRef}
            target="_blank"
            className="formation-location"
          >
            <svg
              width="12"
              height="17"
              viewBox="0 0 12 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.95C12 9.23609 7.71429 17 6 17C4.28571 17 0 9.23609 0 5.95C0 2.66391 2.68629 0 6 0C9.31371 0 12 2.66391 12 5.95Z"
                fill="#6CB0D7"
              />
            </svg>
            {formation.location}
          </a>
        </h4>

        <h5 className="formation-subtitle">{formation.dominante}</h5>
      </div>
    </div>
  );
};

const FormationList = ({ isSideMenuShown }: FormationListProps) => {
  const formationList = DATA_FORMATIONS.map((formation, key) => {
    return (
      <Formation
        isSideMenuShown={isSideMenuShown}
        formation={formation}
        key={key}
      />
    );
  });

  return (
    <div
      id="formations"
      className={
        isSideMenuShown ? "formationList sidemenuopen" : "formationList"
      }
    >
      <h2 className="formationList-title">Formation</h2>
      {formationList}
    </div>
  );
};

export default FormationList;
