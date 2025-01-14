import sprite from "../../images/icons.svg";

const CamperCard = ({ camper }) => {
  console.log(camper);
  return (
    <li>
      <div>
        <div>
          <h2>{camper.name}</h2>
          <p>`${camper.price},00`</p>
          <svg width="26" height="24">
            <use href={`${sprite}#icon-heart`} />
          </svg>
        </div>
        <div>
          <p></p>
          <p></p>
        </div>
        <p></p>
        <ul>
          <li></li>
        </ul>
        <button>Show more</button>
      </div>
    </li>
  );
};

export default CamperCard;
